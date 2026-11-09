---
layout: page
title: Claude Code & Opus 5.5 Setup
title_zh: Claude Code 与 Opus 5.5 使用指南
permalink: /claude-setup/
description: A short setup reference for the AI project test.
description_zh: AI 项目测试的简短工具配置参考。
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/join-us.css' | relative_url }}">
<div class="join-page">
  <p class="join-lede"><span data-lang="en">Install Claude Code on your computer, then connect it to a service that provides Opus 5.5. The model runs remotely; this does not install model weights locally. You may use other tools for the AI project test.</span><span data-lang="zh">在电脑上安装 Claude Code，再接入提供 Opus 5.5 的服务。模型在远端运行，不是将模型权重安装到本地。参加 AI 项目测试也可以使用其他工具。</span></p>
  <section class="join-section join-contact">
    <h2><span data-lang="en">Third-party service notice</span><span data-lang="zh">第三方服务说明</span></h2>
    <p><span data-lang="en">The linked third-party platform is independently operated and is not affiliated with FreedomAI or our research group. This link is for reference, not an endorsement. We do not guarantee its availability, reliability, model authenticity, privacy practices, or payment and refund handling, and do not take responsibility for the platform or this access method. Check its current terms and documentation before use or payment.</span><span data-lang="zh">下方第三方平台由其运营方独立提供，与 FreedomAI 及课题组无隶属或合作关系。链接仅供参考，不构成推荐或背书。我们不保证其可用性、可靠性、模型真实性、隐私保护或充值退款处理，也不对该平台及接入方式负责。使用或付费前，请自行核对其最新说明与条款。</span></p>
    <a class="join-button" href="https://api.awesomeai.codes/wallet" target="_blank" rel="noopener noreferrer"><span data-lang="en">Open third-party platform ↗</span><span data-lang="zh">前往第三方平台 ↗</span></a>
  </section>
  <section class="join-section">
    <h2><span data-lang="en">1. Install Claude Code</span><span data-lang="zh">1. 安装 Claude Code</span></h2>
    <p><span data-lang="en">Follow the <a href="https://code.claude.com/docs/en/setup">official installation guide</a>. On Windows, open PowerShell and run:</span><span data-lang="zh">按<a href="https://code.claude.com/docs/en/setup">官方安装说明</a>操作。Windows 用户可打开 PowerShell，运行：</span></p>
    <pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>
    <p><span data-lang="en">Alternatively, if you already use WorkBuddy, ask it to help install Claude Code from the official source. To prefer drive D, ask it to check installation, cache, and configuration locations; some files may still use drive C.</span><span data-lang="zh">如果已使用 WorkBuddy，也可以请它协助从官方来源安装 Claude Code。希望优先使用 D 盘时，让它检查安装、缓存和配置目录；部分文件仍可能占用 C 盘。</span></p>
    <p><span data-lang="en">Open a new terminal and check:</span><span data-lang="zh">重新打开终端，检查是否安装成功：</span></p>
    <pre><code>claude --version</code></pre>
  </section>
  <section class="join-section">
    <h2><span data-lang="en">2. Configure access</span><span data-lang="zh">2. 配置服务接入</span></h2>
    <p><span data-lang="en">You can use official Claude access or choose a third-party service. For the latter, first confirm that it supports Claude Code and Opus 5.5, review its pricing, then create an API key in its console. Follow that provider's current instructions for the API base URL, authentication field, and model ID. The wallet page is not an API endpoint. We have not verified this provider's current configuration or model routing.</span><span data-lang="zh">可以使用 Claude 官方接入方式，也可自行选择第三方服务。使用第三方时，先确认其支持 Claude Code 和 Opus 5.5、了解计费方式，再按需开通并在控制台创建 API 密钥。API 地址、认证字段及模型 ID 均以服务商最新教程为准；钱包页面不是 API 接口地址。我们未核验该平台当前的配置及模型路由。</span></p>
    <p><span data-lang="en">Ask WorkBuddy to locate the configuration file if needed, then enter the key locally. Do not put API keys in chat messages, screenshots, public repositories, or test submissions. Requests sent through a third party are handled by that provider.</span><span data-lang="zh">不清楚配置文件位置时，可请 WorkBuddy 协助定位，再自行在本地填写密钥。不要把 API 密钥放入聊天、截图、公开仓库或测试提交材料。通过第三方接入的请求会交由该服务商处理。</span></p>
  </section>
  <section class="join-section">
    <h2><span data-lang="en">3. Start and select the model</span><span data-lang="zh">3. 启动并选择模型</span></h2>
    <p><span data-lang="en">Reopen the terminal, enter your project folder, and run:</span><span data-lang="zh">重新打开终端，进入项目目录后运行：</span></p>
    <pre><code>claude</code></pre>
    <p><span data-lang="en">Use <code>/model</code> to select Opus 5.5 when available. If a gateway requires a custom model ID, use the exact ID in its documentation. Check <code>/status</code> and run a small task to confirm access. A displayed model name alone does not verify a third party's actual backend.</span><span data-lang="zh">使用 <code>/model</code>，在可用选项中选择 Opus 5.5；网关需要自定义模型 ID 时，使用其文档给出的准确名称。通过 <code>/status</code> 检查配置，并用一个小任务验证接入。客户端显示的模型名称本身不能证明第三方实际调用的后端模型。</span></p>
    <p><a href="https://code.claude.com/docs/en/model-config"><span data-lang="en">Official model configuration reference</span><span data-lang="zh">官方模型配置说明</span></a></p>
  </section>
  <div class="join-actions"><a class="join-button" href="{{ '/ai-test/' | relative_url }}"><span data-lang="en">Back to the AI project test</span><span data-lang="zh">返回 AI 项目测试</span></a></div>
</div>
