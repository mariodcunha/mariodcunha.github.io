# Big Art Loop — project handoff

## What this is
Mario's personal collection of the Big Art Loop (bigartloop.org): ~100 large public
sculptures along a 34-mile trail in San Francisco. He visits each piece and records:
1. One photo of himself with the art (selfie or someone else's shot)
2. Who took the photo
3. A link to the art's official page on bigartloop.org

The website tells the story of that journey. Viewers make zero effort: no clicking,
no dragging, they only scroll. Mario decides the loop order.

## Hosting
- Repo: github.com/mariodcunha/mariodcunha.github.io (GitHub Pages)
- Folder: /big-art-loop/ (lowercase-hyphen on purpose: no %20 in URLs, Pages is case-sensitive)
- Live URL: https://mariodcunha.github.io/big-art-loop/

## Files
big-art-loop/
  index.html        ← the entire site (HTML/CSS/JS in one file)
  photos/*.jpg      ← kind, smile, robot; resized to ~1400px long side, JPEG q82
                      (full-size originals kept in ~/Downloads/big-art-loop-originals, not published)
  CLAUDE.md         ← this file

## How the page works
- Map: MapLibre GL JS 4.7.1 (jsDelivr CDN) + OpenFreeMap "positron" style
  (free, no API key). Restyled in quietStyle(): road names, shields, airports,
  country/state labels hidden; parks #D9E5CF, water #C5D6DB, land #F3F4EF.
- Labels: custom dark bold "San Francisco" label (Noto Sans Bold, sf-label layer);
  base-map SF city label filtered out; neighborhood/town labels light gray
  (#8E979F), sentence case.
- Map is non-interactive (interactive:false); page scroll drives the camera via
  map.jumpTo() every frame, with light smoothing.
- Camera timeline (in screen-heights of scroll): FLY 1.2, HOLD 1.0, OUT 1.0.
  - Page always opens on the SF overview (scroll restoration is off): hollow dots only, no trail.
  - First scroll zooms straight toward stop 1 (anchored zoom). It must never
    drift to the center first. Mario asked for this explicitly.
  - Between stops (Mario: "less eye bounce"): if the next stop is already on screen
    at stop zoom (inView), glide over at the same zoom in one smooth ease. Only when
    it's off screen: zoom out just enough to see both, then zoom in (outBack overshoot).
  - At the end: zoom back out to show the whole loop, pause (RESET), then the trail
    fades out and pins go hollow again (LOOP). Scrolling on wraps to the top, so the
    loop restarts endlessly from the no-trail start.
  - Z_STOP = 15.4, FOCUS_Y = 0.76 (the pin sits low; the Polaroid appears above it).
- Pins: DOM overlays, blue #2B4FE0. Hollow until visited, filled after, hollow again on loop reset.
- Trail: light gray (#9EA5AC) dashed line, rounded caps and joins (no sharp
  dashes), gentle arc between stops, drawn progressively while travelling.
- Polaroid (appears at each stop):
  - Square photo (center-cropped via object-fit), slight tilt per stop
  - One-line title, auto-shrinks 18px→13px before truncating. The title is an
    always-underlined black link with a small "new window" icon, opens the official bigartloop.org
    page in a new tab.
  - Below: "Photo taken by {credit}" in Kalam (handwritten font)
  - UI font: Bricolage Grotesque
- Text is black (#1B1F24). Mario tried bright red and switched back.
- #track (the tall empty div that makes the page scroll) has pointer-events:none so
  clicks reach the Polaroid links underneath.
- Header "My Big Art Loop" + a counter ("1 / 3", then "3 visited" at the end).
- An on-page error card appears if MapLibre, WebGL, or the tiles fail.

## Adding or editing a stop
Everything lives in the STOPS array at the top of the <script> in index.html,
in loop order:
  { title, url, lngLat: [lng, lat], photo: "photos/x.jpg" | null,
    credit: "a kind stranger", tilt, tint: [top, bottom] }  // tint = placeholder gradient
- photo: null shows a placeholder ("photo coming soon")
- Resize new photos to ~1400px long side, JPEG ~q82, EXIF orientation applied
- Google Maps shows "lat, lng"; lngLat needs [lng, lat]

## Current stops (order set by Mario)
1. WordPlay: KiND: https://www.bigartloop.org/reuben-rude-wordplay-kind
   Golden Gate Park, JFK Promenade & 8th Ave. photo: photos/kind.jpg ✅
2. WordPlay: SMiLE: https://www.bigartloop.org/reuben-rude-wordplay-smile
   Same spot as KiND. photo: photos/smile.jpg ✅
3. Dr. Fisherian's Runaway Machine: https://www.bigartloop.org/dr-fisherians-runaway-machine
   Crane Cove Park (Port of SF). photo: photos/robot.jpg ✅
Credit for all three is "a kind stranger" for now.

## Local preview
macOS blocks local servers from reading ~/Downloads, so a local preview has to
serve a copy from elsewhere. Map tiles, fonts and sprites were verified loading
from OpenFreeMap on localhost on 2026-09-27: all 3 stops, trail, pins, counter OK.

## Publishing
No git login on Mario's Mac (no gh, no SSH key, no keychain entry). Changes have been
published by uploading files through github.com's "Upload files" page (Chrome is signed in).
The default branch is master, not main. Pages updates ~1–2 min after a commit.

## Open items
- Pin coordinates are estimates. Verify or replace with exact spots from Mario.
- Real photographer credits, if Mario wants to change them
