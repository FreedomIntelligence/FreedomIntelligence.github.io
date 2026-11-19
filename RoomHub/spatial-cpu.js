/* Calibrated, depth-tested software view. The original reconstruction stays visible
   except where the visitor has displaced a real joint away from its recorded pose. */
(() => {
  'use strict';
  const identity = [1,0,0,0, 0,1,0,0, 0,0,1,0];
  const near = 0.035;
  const clamp = (value, lo, hi) => Math.min(hi, Math.max(lo, value));
  function array16(text) {
    const raw = atob(text);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    return new Uint16Array(bytes.buffer);
  }
  function mul(a,b) {
    const result = new Float64Array(12);
    for (let i = 0; i < 12; i+=4) {
      for (let c = 0; c < 4; c++) {
        result[i+c] = a[i]*b[c]+a[i+1]*b[4+c]+a[i+2]*b[8+c]+(c===3 ? a[i+3] : 0);
      }
    }
    return result;
  }
  function inverse(m) {
    const [a,b,c,x,d,e,f,y,g,h,i,z]=m;
    const t=1/(a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g));
    const r=[(e*i-f*h)*t,(c*h-b*i)*t,(b*f-c*e)*t,0,
      (f*g-d*i)*t,(a*i-c*g)*t,(c*d-a*f)*t,0,
      (d*h-e*g)*t,(b*g-a*h)*t,(a*e-b*d)*t,0];
    for(let k=0;k<12;k+=4)r[k+3]=-r[k]*x-r[k+1]*y-r[k+2]*z;
    return r;
  }
  function transform(m,x,y,z) {
    return [m[0]*x+m[1]*y+m[2]*z+m[3],m[4]*x+m[5]*y+m[6]*z+m[7],m[8]*x+m[9]*y+m[10]*z+m[11]];
  }
  function jointMatrix(j,t) {
    const a=j.closed,b=j.open,qa=a.quaternion,qb=b.quaternion;
    let dot=qa[0]*qb[0]+qa[1]*qb[1]+qa[2]*qb[2]+qa[3]*qb[3];
    const sign=dot<0 ? -1 : 1;
    const angle=Math.acos(clamp(dot*sign,-1,1));
    const smooth=angle>1e-6;
    const u=smooth ? Math.sin((1-t)*angle)/Math.sin(angle) : 1-t;
    const v=(smooth ? Math.sin(t*angle)/Math.sin(angle) : t)*sign;
    const [x,y,z,w]=qa.map((n,i)=>n*u+qb[i]*v);
    const p=a.position.map((n,i)=>n*(1-t)+b.position[i]*t);
    const s=a.scale.map((n,i)=>n*(1-t)+b.scale[i]*t);
    return [s[0]*(1-2*(y*y+z*z)),s[1]*2*(x*y-z*w),s[2]*2*(x*z+y*w),p[0],
      s[0]*2*(x*y+z*w),s[1]*(1-2*(x*x+z*z)),s[2]*2*(y*z-x*w),p[1],
      s[0]*2*(x*z-y*w),s[1]*2*(y*z+x*w),s[2]*(1-2*(x*x+y*y)),p[2]];
  }
  function packed(rgb, light) {
    const channel=i=>clamp(Math.round(rgb[i]*light),0,255);
    return (255<<24)|(channel(2)<<16)|(channel(1)<<8)|channel(0);
  }
  function decode(g,materials) {
    const pos=array16(g.xyz),idx=array16(g.idx);
    const p=new Float32Array(pos.length);
    for(let i=0;i<p.length;i++)p[i]=g.min[i%3]+pos[i]*g.ext[i%3]/65535;
    const colors=new Uint32Array(idx.length/3);
    const rgb=materials[g.m].rgb;
    for(let i=0;i<idx.length;i+=3) {
      const a=idx[i]*3,b=idx[i+1]*3,c=idx[i+2]*3;
      const ux=p[b]-p[a],uy=p[b+1]-p[a+1],uz=p[b+2]-p[a+2];
      const vx=p[c]-p[a],vy=p[c+1]-p[a+1],vz=p[c+2]-p[a+2];
      const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
      const n=Math.hypot(nx,ny,nz)||1;
      const light=.69+.28*Math.max(0,(-.40*nx-.50*ny+.76*nz)/n)+.06*Math.max(0,nz/n);
      colors[i/3]=packed(rgb,light);
    }
    return {j:g.j,reproject:g.reproject!==false,lo:g.min,hi:g.min.map((n,i)=>n+g.ext[i]),p,idx,colors,cam:new Float32Array(p.length)};
  }

  window.roomhubSpatialCPU = function (canvas,scene,track,helpers={}) {
    const context=canvas.getContext('2d',{alpha:true});
    if(!context)throw new Error('当前浏览器未能建立交互画布');
    const groups=scene.groups.map(g=>decode(g,scene.materials));
    const joints=track.joints, count=joints.length;
    const idIndex=new Map(joints.map((j,i)=>[j.id,i]));
    const bounds=joints.map(()=>({lo:[Infinity,Infinity,Infinity],hi:[-Infinity,-Infinity,-Infinity]}));
    for(const g of groups)if(g.j>=0)for(let i=0;i<3;i++){
      bounds[g.j].lo[i]=Math.min(bounds[g.j].lo[i],g.lo[i]);
      bounds[g.j].hi[i]=Math.max(bounds[g.j].hi[i],g.hi[i]);
    }
    const transparent=helpers.background===true;
    const refCanvas=document.createElement('canvas');
    let refContext, disableRead=false;
    let w=0,h=0,output,rgb,baseZ,baseTags,baseRGB,refZ,refTags,curZ,curTags,curRGB;
    let frameId=-1,K,cam,world,fx,fy,cx,cy,actual=[],recorded=[],jcam=[],rcam=[],inverses=[],lastRect,edgeMask,baseSource,curSource;
    let cropX,cropY,cropR,cropB;
    let disposed=false,preparing=false,preparation;
    const stopped=()=>disposed||helpers.signal?.aborted;
    const photographs=[];
    function loadPixels(url,w,h) {
      return new Promise((resolve,reject)=>{
        const image=new Image();
        image.onerror=reject;
        image.onload=()=>{
          try {
            const surface=document.createElement('canvas');
            surface.width=w;surface.height=h;
            const ctx=surface.getContext('2d',{willReadFrequently:true});
            ctx.drawImage(image,0,0,w,h);
            resolve(ctx.getImageData(0,0,w,h).data);
            surface.width=surface.height=1;
          }catch(error){reject(error);}
        };
        image.src=url;
      });
    }
    // Photographs from several other calibrated frames recover real grain and detail
    // on surfaces hidden in the current video frame. The depth/ID maps reject occlusions.
    async function prepareReference(item){
      const [pixels,coverage]=await Promise.all([
        loadPixels(item.image,item.w,item.h),loadPixels(item.visibility,item.w,item.h)
      ]);
      if(stopped())return;
      const f=track.frames[item.frame],camera=inverse(f.c2w.slice(0,12));
      const poses=track.defaultTrack[item.frame], transforms=[camera];
      for(let i=0;i<count;i++)transforms.push(mul(camera,jointMatrix(joints[i],poses[i])));
      photographs.push({w:item.w,h:item.h,poses,transforms,cameraWorld:f.c2w,pixels:new Uint32Array(pixels.buffer),coverage,
        fx:f.K[0]*item.w/track.width,fy:f.K[4]*item.h/track.height,
        cx:f.K[2]*item.w/track.width,cy:f.K[5]*item.h/track.height});
      if(frameId>=0){
        const previous=frameId;frameId=-1;frame(previous,actual);
      }
    }
    const referencesReady=typeof Image!=='undefined'
      ? Promise.allSettled((scene.references||[]).map(prepareReference))
      : Promise.resolve();
    function secondaryViews(moved) {
      return photographs.map(ref=>{
        const refWorld=ref.cameraWorld;
        let distance=0;
        for(let row=0;row<12;row+=4) {
          distance+=(world[row+3]-refWorld[row+3])**2+0.4*(world[row+2]-refWorld[row+2])**2;
        }
        for(let j=0;j<count;j++)if(moved[j])distance+=.45*(ref.poses[j]-actual[j])**2;
        return {ref,distance,m:[mul(ref.transforms[0],world),
          ...inverses.map((matrix,j)=>mul(ref.transforms[j+1],matrix))]};
      }).sort((a,b)=>a.distance-b.distance);
    }
    function recoveredColor(views,tag,x,y,z,fallback) {
      for(const {ref,m} of views) {
        const transform=m[tag];
        const rz=transform[8]*x+transform[9]*y+transform[10]*z+transform[11];
        if(rz<near)continue;
        const u=Math.floor(ref.cx+ref.fx*(transform[0]*x+transform[1]*y+transform[2]*z+transform[3])/rz);
        const v=Math.floor(ref.cy+ref.fy*(transform[4]*x+transform[5]*y+transform[6]*z+transform[7])/rz);
        if(u<0||u>=ref.w||v<0||v>=ref.h)continue;
        const index=v*ref.w+u,c=index*4,depth=(ref.coverage[c]*256+ref.coverage[c+1])*.0001;
        if(ref.coverage[c+2]===tag&&Math.abs(depth*rz-1)<.004)return ref.pixels[index];
      }
      return fallback;
    }
    function size() {
      const dpi=Math.min(window.devicePixelRatio||1,1.5);
      const css=canvas.clientWidth||canvas.width||640;
      const width=Math.max(16,Math.min(640,Math.round(css*dpi)));
      const height=Math.round(width*track.height/track.width);
      if(width===w&&height===h)return false;
      canvas.width=w=width; canvas.height=h=height;
      output=context.createImageData(w,h); rgb=new Uint32Array(output.data.buffer);
      baseZ=new Float32Array(w*h); baseTags=new Uint8Array(w*h); baseRGB=new Uint32Array(w*h);
      edgeMask=new Uint8Array(w*h);
      baseSource=new Uint8Array(w*h);curSource=new Uint8Array(w*h);
      refZ=new Float32Array(w*h);refTags=new Uint8Array(w*h);
      curZ=new Float32Array(w*h);curTags=new Uint8Array(w*h);curRGB=new Uint32Array(w*h);
      refCanvas.width=w;refCanvas.height=h;lastRect=null;
      return true;
    }
    function rectFor(box,m) {
      let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity,front=0;
      for(let i=0;i<8;i++) {
        const a=transform(m,(i&1)?box.hi[0]:box.lo[0],(i&2)?box.hi[1]:box.lo[1],(i&4)?box.hi[2]:box.lo[2]);
        if(a[2]<near)continue;
        ++front;
        const x=cx+fx*a[0]/a[2],y=cy+fy*a[1]/a[2];
        minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);
      }
      if(!front)return null;
      if(front!==8)return [0,0,w-1,h-1];
      return [Math.floor(minX)-2,Math.floor(minY)-2,Math.ceil(maxX)+2,Math.ceil(maxY)+2];
    }
    function triangle(ax,ay,az,bx,by,bz,dx,dy,dz,group,color,zbuf,tbuf,cbuf,sbuf,source) {
      const za=1/az,zb=1/bz,zd=1/dz;
      ax=cx+fx*ax*za;ay=cy+fy*ay*za;bx=cx+fx*bx*zb;by=cy+fy*by*zb;dx=cx+fx*dx*zd;dy=cy+fy*dy*zd;
      const minX=Math.max(cropX,Math.ceil(Math.min(ax,bx,dx)-.5));
      const minY=Math.max(cropY,Math.ceil(Math.min(ay,by,dy)-.5));
      const maxX=Math.min(cropR,Math.floor(Math.max(ax,bx,dx)-.5));
      const maxY=Math.min(cropB,Math.floor(Math.max(ay,by,dy)-.5));
      if(minX>maxX||minY>maxY)return;
      const det=(by-dy)*(ax-dx)+(dx-bx)*(ay-dy);
      if(Math.abs(det)<.014)return;
      const dax=(by-dy)/det,day=(dx-bx)/det,dbx=(dy-ay)/det,dby=(ax-dx)/det;
      let a0=dax*(minX+.5-dx)+day*(minY+.5-dy),b0=dbx*(minX+.5-dx)+dby*(minY+.5-dy);
      for(let y=minY;y<=maxY;y++,a0+=day,b0+=dby) {
        let a=a0,b=b0,offset=y*w+minX;
        for(let x=minX;x<=maxX;x++,a+=dax,b+=dbx,offset++) {
          if(a<-.00001||b<-.00001||a+b>1.00001)continue;
          const depth=zd+(za-zd)*a+(zb-zd)*b;
          if(depth<zbuf[offset])continue;
          zbuf[offset]=depth;tbuf[offset]=group;
          if(cbuf)cbuf[offset]=color;
          if(sbuf)sbuf[offset]=source;
        }
      }
    }
    function croppedTriangle(ax,ay,az,bx,by,bz,dx,dy,dz,j,color,z,t,c,sbuf,source) {
      const vertices=[[ax,ay,az],[bx,by,bz],[dx,dy,dz]],out=[];
      let prev=vertices[2];
      for(const p of vertices) {
        if((prev[2]>=near)!==(p[2]>=near)) {
          const factor=(near-prev[2])/(p[2]-prev[2]);
          out.push([prev[0]+(p[0]-prev[0])*factor,prev[1]+(p[1]-prev[1])*factor,near]);
        }
        if(p[2]>=near)out.push(p);
        prev=p;
      }
      for(let i=1;i+1<out.length;i++)triangle(...out[0],...out[i],...out[i+1],j,color,z,t,c,sbuf,source);
    }
    function drawGroup(g,m,z,t,c,sbuf) {
      const rect=rectFor(g,m);
      if(!rect||rect[0]>cropR||rect[1]>cropB||rect[2]<cropX||rect[3]<cropY)return;
      const {p,cam:points,idx}=g;
      for(let i=0;i<p.length;i+=3) {
        const x=p[i],y=p[i+1],v=p[i+2];
        points[i]=m[0]*x+m[1]*y+m[2]*v+m[3];
        points[i+1]=m[4]*x+m[5]*y+m[6]*v+m[7];
        points[i+2]=m[8]*x+m[9]*y+m[10]*v+m[11];
      }
      const tag=g.j+1;
      for(let i=0;i<idx.length;i+=3) {
        const a=idx[i]*3,b=idx[i+1]*3,d=idx[i+2]*3;
        const za=points[a+2],zb=points[b+2],zd=points[d+2];
        if(za<near&&zb<near&&zd<near)continue;
        const color=g.colors[i/3];
        if(za>=near&&zb>=near&&zd>=near) {
          triangle(points[a],points[a+1],za,points[b],points[b+1],zb,points[d],points[d+1],zd,tag,color,z,t,c,sbuf,g.reproject?1:0);
        } else {
          croppedTriangle(points[a],points[a+1],za,points[b],points[b+1],zb,points[d],points[d+1],zd,tag,color,z,t,c,sbuf,g.reproject?1:0);
        }
      }
    }
    function sourcePixels() {
      const reference=helpers.reference;
      const el=reference?.element;
      if(!el||disableRead||(el.readyState!=null&&el.readyState<2))return null;
      try {
        refContext=refContext||refCanvas.getContext('2d',{willReadFrequently:true});
        const width=el.videoWidth||el.width,height=el.videoHeight||el.height;
        if(!width||!height)return null;
        const sx=reference.side==='right'?width/2:0;
        refContext.drawImage(el,sx,0,width-sx,height,0,0,w,h);
        return new Uint32Array(refContext.getImageData(0,0,w,h).data.buffer);
      } catch {
        disableRead=true;return null;
      }
    }
    function coverRecordedEdges(moved) {
      for(let y=cropY; y<=cropB; y++)edgeMask.fill(0,y*w+cropX,y*w+cropR+1);
      // Grow only boundary pixels of the original silhouette. Interior pixels
      // need no neighborhood search, and nearer foreground geometry is protected.
      for(let y=cropY; y<=cropB; y++)for(let x=cropX; x<=cropR; x++) {
        const i=y*w+x;
        if(!moved[refTags[i]-1])continue;
        if(x>cropX&&x<cropR&&y>cropY&&y<cropB&&
          moved[refTags[i-1]-1]&&moved[refTags[i+1]-1]&&
          moved[refTags[i-w]-1]&&moved[refTags[i+w]-1])continue;
        const depth=refZ[i];
        for(let dy=-1; dy<=1; dy++) {
          const row=y+dy;
          if(row<cropY||row>cropB)continue;
          for(let dx=-1; dx<=1; dx++) {
            const column=x+dx;
            if(column<cropX||column>cropR)continue;
            const n=row*w+column,other=refZ[n];
            if(depth>=other/(1+.006*other))edgeMask[n]=1;
          }
        }
      }
    }
    function frame(index,values) {
      if(stopped())return;
      index=clamp(Math.round(index),0,track.frames.length-1);
      const changedSize=size();
      const sameFrame=frameId===index&&!changedSize;
      const current=track.frames[index];
      const reference=track.defaultTrack?.[index]||joints.map(()=>0);
      const next=joints.map((j,i)=>clamp(Number(values?.[i]??reference[i])||0,0,1));
      if(sameFrame&&next.every((t,i)=>t===actual[i]))return;
      frameId=index;
      actual=next;recorded=reference;
      K=current.K;world=current.c2w.slice(0,12);cam=inverse(world);
      fx=K[0]*w/track.width;fy=K[4]*h/track.height;
      cx=K[2]*w/track.width;cy=K[5]*h/track.height;
      jcam=joints.map((j,i)=>mul(cam,jointMatrix(j,actual[i])));
      rcam=joints.map((j,i)=>mul(cam,jointMatrix(j,recorded[i]||0)));
      inverses=jcam.map(inverse);
      const moved=actual.map((v,i)=>Math.abs(v-(recorded[i]||0))>.0005);
      if(lastRect&&!preparing)context.clearRect(lastRect[0],lastRect[1],lastRect[2]-lastRect[0]+1,lastRect[3]-lastRect[1]+1);
      lastRect=null;
      if(transparent&&!moved.some(Boolean))return;
      let rect=transparent?[w,h,-1,-1]:[0,0,w-1,h-1];
      if(transparent)for(let i=0;i<count;i++){
        if(!moved[i])continue;
        for(const mat of [jcam[i],rcam[i]]) {
          const b=rectFor(bounds[i],mat);if(!b)continue;
          rect=[Math.min(rect[0],b[0]),Math.min(rect[1],b[1]),Math.max(rect[2],b[2]),Math.max(rect[3],b[3])];
        }
      }
      cropX=Math.max(0,rect[0]);cropY=Math.max(0,rect[1]);cropR=Math.min(w-1,rect[2]);cropB=Math.min(h-1,rect[3]);
      if(cropX>cropR||cropY>cropB)return;
      lastRect=[cropX,cropY,cropR,cropB];
      for(let y=cropY;y<=cropB;y++) {
        const start=y*w+cropX,end=y*w+cropR+1;
        baseZ.fill(0,start,end);baseTags.fill(0,start,end);baseRGB.fill(0xffc6d5dd,start,end);baseSource.fill(0,start,end);
      }
      for(const g of groups)if(g.j<0||!moved[g.j])drawGroup(g,g.j<0?cam:jcam[g.j],baseZ,baseTags,baseRGB,baseSource);
      for(let y=cropY;y<=cropB;y++){
        const start=y*w+cropX,end=y*w+cropR+1;
        refZ.set(baseZ.subarray(start,end),start);curZ.set(baseZ.subarray(start,end),start);
        refTags.set(baseTags.subarray(start,end),start);curTags.set(baseTags.subarray(start,end),start);
        curRGB.set(baseRGB.subarray(start,end),start);
        curSource.set(baseSource.subarray(start,end),start);
      }
      for(const g of groups)if(g.j>=0&&moved[g.j]){
        drawGroup(g,rcam[g.j],refZ,refTags,null);
        drawGroup(g,jcam[g.j],curZ,curTags,curRGB,curSource);
      }
      coverRecordedEdges(moved);
      const photo=sourcePixels();
      const views=secondaryViews(moved);
      const reprojection=actual.map((_,i)=>moved[i]?mul(rcam[i],inverses[i]):identity);
      for(let y=cropY;y<=cropB;y++){
        for(let x=cropX;x<=cropR;x++) {
          const i=y*w+x,j=curTags[i]-1,ref=refTags[i]-1;
          if(!moved[j]&&!moved[ref]&&!edgeMask[i]) {
            rgb[i]=transparent?0:(photo?photo[i]:curRGB[i]);
            continue;
          }
          let color=curRGB[i];
          if(curSource[i]&&curZ[i]>0&&(photo||views.length)) {
            const depth=1/curZ[i],xx=(x+.5-cx)*depth/fx,yy=(y+.5-cy)*depth/fy;
            if(photo&&j>=0&&moved[j]) {
            const m=reprojection[j];
            const rz=m[8]*xx+m[9]*yy+m[10]*depth+m[11];
            if(rz>near){
              const u=Math.floor(cx+fx*(m[0]*xx+m[1]*yy+m[2]*depth+m[3])/rz);
              const v=Math.floor(cy+fy*(m[4]*xx+m[5]*yy+m[6]*depth+m[7])/rz);
              if(u>=cropX&&u<=cropR&&v>=cropY&&v<=cropB){
                const n=v*w+u;
                if(refTags[n]===j+1&&Math.abs(refZ[n]*rz-1)<.003){rgb[i]=photo[n];continue;}
              }
            }
            }
            color=recoveredColor(views,j+1,xx,yy,depth,color);
          }
          rgb[i]=color;
        }
      }
      if(!preparing)context.putImageData(output,0,0,cropX,cropY,cropR-cropX+1,cropB-cropY+1);
    }

    function prepare(index=0,selectedId) {
      if(preparation)return preparation;
      preparation=(async()=>{
        // The unedited-video fast path never visits the software rasterizer or
        // reads the reference canvas. Exercise that path before enabling clicks,
        // including the decoded secondary views, without painting temporary poses.
        await referencesReady;
        if(stopped())return;
        index=clamp(Math.round(index),0,track.frames.length-1);
        const baseline=(track.defaultTrack[index]||joints.map(()=>0)).slice();
        preparing=true;
        try {
          frame(index,baseline);
          let joint=idIndex.get(selectedId);
          if(joint===undefined)joint=joints.findIndex(j=>anchor(j.id));
          if(joint<0)return;
          for(const amount of [.2,.65,1]) {
            if(stopped())return;
            const values=baseline.slice();
            values[joint]=baseline[joint]>.5?1-amount:amount;
            frame(index,values);
            // Keep video decoding and input responsive between warm-up frames.
            await new Promise(resolve=>setTimeout(resolve,0));
          }
        } finally {
          preparing=false;
          frameId=-1;
          if(!stopped())frame(index,baseline);
        }
      })();
      return preparation;
    }

    function boxHit(o,d,g,best) {
      let lo=near,hi=best;
      for(let i=0;i<3;i++){
        if(Math.abs(d[i])<1e-10){if(o[i]<g.lo[i]||o[i]>g.hi[i])return false;continue;}
        let a=(g.lo[i]-o[i])/d[i], b=(g.hi[i]-o[i])/d[i];
        if(a>b){const temp=a;a=b;b=temp;}
        lo=Math.max(a,lo);hi=Math.min(b,hi);
        if(lo>hi)return false;
      }
      return true;
    }
    function pick(u,v) {
      if(disposed||frameId<0||u<0||u>1||v<0||v>1)return null;
      const dx=(u*w-cx)/fx,dy=(v*h-cy)/fy;
      const rays=[world,...inverses].map(m=>({
        o:[m[3],m[7],m[11]],d:[m[0]*dx+m[1]*dy+m[2],m[4]*dx+m[5]*dy+m[6],m[8]*dx+m[9]*dy+m[10]]
      }));
      let nearest=Infinity, tag=-1;
      for(const g of groups) {
        const ray=rays[g.j+1],o=ray.o,d=ray.d;
        if(!boxHit(o,d,g,nearest))continue;
        const p=g.p,idx=g.idx;
        for(let i=0;i<idx.length;i+=3){
          const a=idx[i]*3,b=idx[i+1]*3,c=idx[i+2]*3;
          const x1=p[b]-p[a],y1=p[b+1]-p[a+1],z1=p[b+2]-p[a+2];
          const x2=p[c]-p[a],y2=p[c+1]-p[a+1],z2=p[c+2]-p[a+2];
          const px=d[1]*z2-d[2]*y2,py=d[2]*x2-d[0]*z2,pz=d[0]*y2-d[1]*x2;
          const det=x1*px+y1*py+z1*pz;
          if(Math.abs(det)<1e-12)continue;
          const tx=o[0]-p[a],ty=o[1]-p[a+1],tz=o[2]-p[a+2];
          const u=(tx*px+ty*py+tz*pz)/det;
          if(u<0||u>1)continue;
          const qx=ty*z1-tz*y1,qy=tz*x1-tx*z1,qz=tx*y1-ty*x1;
          const v=(d[0]*qx+d[1]*qy+d[2]*qz)/det;
          if(v<0||u+v>1)continue;
          const t=(x2*qx+y2*qy+z2*qz)/det;
          if(t>=near&&t<nearest){nearest=t;tag=g.j;}
        }
      }
      return tag>=0?joints[tag].id:null;
    }
    function anchor(id) {
      const j=idIndex.get(id);
      if(frameId<0||j===undefined)return null;
      const b=bounds[j],m=jcam[j];
      const mid=b.lo.map((n,i)=>(n+b.hi[i])*.5);
      const candidates=[mid,[mid[0],b.lo[1],mid[2]],[mid[0],b.hi[1],mid[2]],
        [b.lo[0],mid[1],mid[2]],[b.hi[0],mid[1],mid[2]],[mid[0],mid[1],b.hi[2]]];
      for(const p of candidates){
        const q=transform(m,...p);
        if(q[2]<near)continue;
        const u=(cx+fx*q[0]/q[2])/w,v=(cy+fy*q[1]/q[2])/h;
        if(u>0&&u<1&&v>0&&v<1&&pick(u,v)===id)return [u,v];
      }
      return null;
    }
    return {frame,prepare,pick,anchor,dispose(){disposed=true;canvas.width=canvas.height=1;refCanvas.width=refCanvas.height=1;}};
  };
})();
