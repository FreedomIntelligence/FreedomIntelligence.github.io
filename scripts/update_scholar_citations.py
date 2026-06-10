#!/usr/bin/env python3
"""Update cached Google Scholar author metrics for the People page.

Google Scholar has no official public citation-count API. This script supports
SerpAPI when SERPAPI_KEY is present, and otherwise falls back to parsing the
public author profile page. Existing values are kept when a profile cannot be
updated, so the website does not lose citation counts during temporary blocks.
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "assets" / "data" / "scholar-citations.json"
SCHOLAR_URL = "https://scholar.google.com/citations"
SERPAPI_URL = "https://serpapi.com/search.json"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/125.0 Safari/537.36"
)


def utc_now() -> str:
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def load_store(path: Path) -> dict[str, Any]:
    if not path.exists():
      return {"profiles": {}}

    with path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)

    if not isinstance(data.get("profiles"), dict):
        data["profiles"] = {}

    return data


def write_store(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="\n") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2, sort_keys=True)
        handle.write("\n")


def to_int(value: Any) -> int | None:
    if isinstance(value, int):
        return value
    if isinstance(value, float):
        return int(value)
    if value is None:
        return None

    text = html.unescape(str(value))
    text = text.replace(",", "").replace("\u202a", "").replace("\u202c", "")
    match = re.search(r"\d+", text)
    return int(match.group(0)) if match else None


def request_json(url: str, params: dict[str, str]) -> dict[str, Any]:
    encoded_url = url + "?" + urllib.parse.urlencode(params)
    request = urllib.request.Request(
        encoded_url,
        headers={
            "Accept": "application/json",
            "User-Agent": USER_AGENT,
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def request_text(url: str, params: dict[str, str]) -> str:
    encoded_url = url + "?" + urllib.parse.urlencode(params)
    request = urllib.request.Request(
        encoded_url,
        headers={
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "User-Agent": USER_AGENT,
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def serpapi_row_value(rows: list[Any], metric_name: str, recent: bool = False) -> int | None:
    for row in rows:
        if not isinstance(row, dict) or metric_name not in row:
            continue

        metric = row[metric_name]
        if isinstance(metric, dict):
            if recent:
                recent_keys = [name for name in metric if name.startswith("since_")]
                key = recent_keys[0] if recent_keys else "all"
            else:
                key = "all"
            return to_int(metric.get(key))

        if not recent:
            return to_int(metric)

    return None


def fetch_from_serpapi(user_id: str, api_key: str) -> dict[str, Any]:
    data = request_json(
        SERPAPI_URL,
        {
            "engine": "google_scholar_author",
            "author_id": user_id,
            "api_key": api_key,
        },
    )
    author = data.get("author") if isinstance(data.get("author"), dict) else {}
    cited_by = author.get("cited_by") if isinstance(author.get("cited_by"), dict) else {}
    rows = cited_by.get("table") if isinstance(cited_by.get("table"), list) else []

    metrics = {
        "name": author.get("name"),
        "citations": serpapi_row_value(rows, "citations"),
        "citations_recent": serpapi_row_value(rows, "citations", recent=True),
        "h_index": serpapi_row_value(rows, "h_index"),
        "h_index_recent": serpapi_row_value(rows, "h_index", recent=True),
        "i10_index": serpapi_row_value(rows, "i10_index"),
        "i10_index_recent": serpapi_row_value(rows, "i10_index", recent=True),
        "source": "serpapi_google_scholar",
    }

    if metrics["citations"] is None:
        raise ValueError("SerpAPI response did not include author citation metrics")

    return {key: value for key, value in metrics.items() if value is not None}


def fetch_from_google_scholar(user_id: str) -> dict[str, Any]:
    text = request_text(SCHOLAR_URL, {"user": user_id, "hl": "en"})
    values = [
        to_int(match)
        for match in re.findall(r'<td class="gsc_rsb_std">([^<]*)</td>', text)
    ]
    values = [value for value in values if value is not None]

    if len(values) < 6:
        if "recaptcha" in text.lower() or "unusual traffic" in text.lower():
            raise ValueError("Google Scholar returned an anti-bot challenge")
        raise ValueError("Could not parse Google Scholar citation table")

    name_match = re.search(r'<div id="gsc_prf_in">(.+?)</div>', text, flags=re.S)
    name = html.unescape(re.sub(r"<[^>]+>", "", name_match.group(1))).strip() if name_match else None

    metrics = {
        "name": name,
        "citations": values[0],
        "citations_recent": values[1],
        "h_index": values[2],
        "h_index_recent": values[3],
        "i10_index": values[4],
        "i10_index_recent": values[5],
        "source": "google_scholar",
    }
    return {key: value for key, value in metrics.items() if value is not None}


def update_profile(user_id: str, profile: dict[str, Any], api_key: str | None) -> tuple[dict[str, Any], str | None]:
    errors: list[str] = []

    if api_key:
        try:
            return fetch_from_serpapi(user_id, api_key), None
        except Exception as error:  # noqa: BLE001
            errors.append(f"SerpAPI: {error}")

    try:
        return fetch_from_google_scholar(user_id), None
    except Exception as error:  # noqa: BLE001
        errors.append(f"Google Scholar: {error}")

    return profile, "; ".join(errors)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", type=Path, default=DATA_PATH, help="Path to the citation JSON cache.")
    parser.add_argument("--delay", type=float, default=2.0, help="Delay between direct Google Scholar requests.")
    args = parser.parse_args()

    data = load_store(args.data)
    profiles = data["profiles"]
    if not profiles:
        print("No profiles found in citation data.", file=sys.stderr)
        return 1

    api_key = os.getenv("SERPAPI_KEY") or None
    now = utc_now()
    successful = 0

    for index, user_id in enumerate(sorted(profiles)):
        existing = profiles[user_id] if isinstance(profiles[user_id], dict) else {}
        metrics, error = update_profile(user_id, existing, api_key)

        merged = dict(existing)
        merged.update(metrics)
        merged.setdefault("scholar_url", f"{SCHOLAR_URL}?user={urllib.parse.quote(user_id)}&hl=en")

        if error:
            merged["last_error"] = error
            print(f"[warn] {user_id}: {error}", file=sys.stderr)
        else:
            merged.pop("last_error", None)
            merged["updated_at"] = now
            successful += 1
            print(f"[ok] {user_id}: {merged.get('citations')} citations")

        profiles[user_id] = merged

        if not api_key and index + 1 < len(profiles):
            time.sleep(max(0.0, args.delay))

    data["generated_at"] = now
    data["source"] = "serpapi_google_scholar" if api_key else "google_scholar"
    write_store(args.data, data)

    print(f"Updated {successful}/{len(profiles)} profiles.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
