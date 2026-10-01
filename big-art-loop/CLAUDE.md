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
- One typeface everywhere: Bricolage Grotesque (Mario's request), including map labels.
  MapLibre can't draw web fonts, so the base map's place/water labels are kept for
  placement but drawn invisibly (text-opacity 0); updateLabels() asks the map which
  names it placed (queryRenderedFeatures, ~every 150ms) and draws them as DOM text in
  #labels. "San Francisco" is a DOM label too (bold, dark, at SF_LABEL_AT); the base
  map's own SF label is filtered out. Neighborhood labels light gray (#8E979F), sentence case.
- quietStyle() runs on "style.load", not "load" ("load" waits for every tile, which
  left the unstyled map showing for seconds).
- Map is non-interactive (interactive:false); page scroll drives the camera via
  map.jumpTo() every frame, with light smoothing.
- Camera timeline (in screen-heights of scroll): FLY 1.2, HOLD 1.0, OUT 1.0.
  - Page always opens on the SF overview (scroll restoration is off): hollow dots only, no trail.
  - First scroll zooms straight toward stop 1 (anchored zoom). It must never
    drift to the center first. Mario asked for this explicitly.
  - Between stops the camera follows the official Walk Route (WALK_ROUTE) from one
    piece to the next, and the dashed trail is drawn along that same route in step.
    If the next piece is already on screen, or the walk is short, the zoom never
    changes (Mario: "less eye bounce"). Longer walks zoom out to fit the whole walk,
    hold through the middle, then zoom in on arrival with a slight overshoot.
  - Each walk gets more scroll the longer it is (flyFor), so long legs don't race.
  - At the end: zoom back out to show the whole loop, pause (RESET), then the trail
    fades out and pins go hollow again (LOOP). Scrolling on wraps to the top, so the
    loop restarts endlessly from the no-trail start.
  - Z_STOP = 15.4, FOCUS_Y = 0.76 (the pin sits low; the Polaroid appears above it).
- Pins: DOM overlays, pink --dot #E2648E (it was #F0C8D2, which washed out against the
  pale map; Mario asked for it darker and less faded). Hollow until visited, filled after,
  hollow again on loop reset. --dot-size is clamp(10px, 1.1vw + 6.2px, 15px), so they
  shrink on phones and settle at 15px from ~800px wide up; --dot-ring scales with them.
  The three pieces Mario has a photo of are hearts instead of circles (an inline <svg>,
  since a CSS border can't outline a clipped shape); they flip the same way.
  Hovering any pin flips it, exactly as scrolling to it does — render() recomputes
  `upcoming` every frame, so the hovered index has to be folded into that test rather
  than toggled on its own. Clicking a pin opens the art drawer. Pins are aria-hidden:
  they duplicate the Polaroid title link, which is the keyboard path.
  Note --pin (#2B4FE0) is still the accent for focus rings, the drawer chip and link
  hovers; only the map dots went pink.
- Trail: light gray (#9EA5AC) dashed line, rounded caps and joins (no sharp
  dashes), following the walking route, drawn progressively while travelling.
- Detours (DETOURS in index.html, keyed "<from title>|<to title>"): nearly every piece
  stands within ~60 m of the Walk Route, so snapping it to the route and following the
  route looks right. Peace and Penguin's Prayer are 686 m and 940 m south of it, down on
  Brotherhood Way and Lake Merced, and the snap drew blunt straight lines across the
  southwest corner. The three legs around them (Ingleside Sundial → Peace → Penguin's
  Prayer → Octavius) carry a real pedestrian path instead, from OpenStreetMap foot
  routing (routing.openstreetmap.de/routed-foot), Douglas-Peucker simplified to ~3 m:
  2.4 km, 1.0 km and 4.1 km. A detour is the whole walk, so it ignores WALK_ROUTE for
  that stretch; mkLeg() builds the same structure legPath() does. If another piece ever
  lands far off the route, add a DETOUR for the legs either side of it rather than
  nudging its coordinates.
- Polaroid (appears at each stop):
  - Square photo (center-cropped via object-fit), slight tilt per stop
  - One-line title, auto-shrinks 18px→13px before truncating. The title is an
    always-underlined black link (no icon). Clicking it opens the art drawer (below);
    cmd/ctrl-click still opens the official bigartloop.org page in a new tab.
  - No photo credit line (Mario removed it): just the photo and the linked title
  - Polaroid photo: Mario's own photo (STOPS.photo) if he has one; otherwise the official
    photo from ART (same image as the drawer). Images load only when the scroll gets
    within ~3 screens of that stop. A photo that fails to load shows a blank gray square.
- Art drawer (Mario's request), one structure for every piece:
  status chip, title, "by <artist>", official photo (hotlinked from bigartloop.org's
  Squarespace CDN, ?format=1000w) with credit, optional note, "About the piece",
  "Details" (Location / Installed / Partners / Artist links), "Read more on
  bigartloop.org", and a "Go back" button.
  - ≥768px wide: right-side drawer (460px). <768px: bottom sheet that rises to 28px
    from the top, with a grab handle and an X button; its content scrolls.
  - Closes with X, Go back, Esc, or a click on the dimmed map. Page scroll is frozen
    while it's open (html.drawer-open), since scrolling drives the map.
  - Data lives in the ART object in index.html, keyed by each stop's url. Facts, links
    and photo come from each piece's official page (scraped 2026-09-28). "about" is a
    short summary written in our own words, deliberately not the site's text copied.
    "note" is for news (R-Evolution farewell Oct 2, 2026; Traces being refurbished).
- Text is black (#1B1F24). Mario tried bright red and switched back.
- #track (the tall empty div that makes the page scroll) has pointer-events:none so
  clicks reach the Polaroid links underneath.
- Header "My Big Art Loop" + a counter ("1 / 27", then "27 pieces" at the end).
- Beyond scrolling (viewers still need none of this, but it's there):
  - Space scrolls a screen at a time. That's the browser's own behaviour, nothing in the
    page touches it — Mario likes it, so don't add a keydown handler that swallows it.
  - Esc closes the drawer if one is open; otherwise it puts the loop back at the start
    (restart() → goTo(0): scroll to 0 and snap `cur`, so there's no fly-back).
  - A click out on the map puts the current Polaroid away (`dismissed` = that index).
    The scroll does not move, so scrolling on brings it back or carries you to the next
    piece as usual; render() clears `dismissed` as soon as `active` is a different piece.
    `active` had to move out of render() into module scope for this. Clicks on the
    Polaroid, a pin, the drawer, its scrim, the header, the notice or the map credits are
    not "outside". The dismiss waits 220 ms in case a second click is coming.
  - A double-click anywhere runs the loop to the nearest piece: it unprojects the click,
    takes the nearest stop, and jumps to that stop's scroll position. Because the trail
    and the pins are pure functions of the scroll, that lands exactly as if you had
    scrolled the whole way round.
- An on-page error card appears if MapLibre, WebGL, or the tiles fail.

## Data source
Stops and the walking route come from the official Big Art Loop Google My Map
(https://www.google.com/maps/d/viewer?mid=1kDqQMcpTsD7Sbgz4hJCAWOx-B5lytZE, embedded
on bigartloop.org/map). Export it as KML with
https://www.google.com/maps/d/kml?mid=1kDqQMcpTsD7Sbgz4hJCAWOx-B5lytZE&forcekml=1
Its layers / pin colors:
- light blue "Big Art Loop" (14) and dark blue "Big Art Loop - Portside" (13):
  installed, on display now.
- yellow "Other SF Art" (24): not part of the official Loop, but on the site anyway
  (Mario's call) and treated exactly like the rest — no visual distinction.
  Together these 51 are the site's STOPS.
- green "Big Art Loop: Coming Soon" (14), gray "Future Candidate Sites" (4): not on the site.
- lines: black "Walk Route" (a 55 km loop, = WALK_ROUTE) and blue bike-route detours.
Known gaps on the official map: Heartfullness and The Giraffes have pages on
bigartloop.org/art but no pin.

## Adding or editing a stop
Everything lives in the STOPS array at the top of the <script> in index.html,
in walking order along the route (currently starting at KiND, heading east
through Golden Gate Park → Panhandle → North City → Portside → South City →
Oceanside → back into the park, ending at Naga):
  { title, url, lngLat: [lng, lat], photo: "photos/x.jpg" | null, tilt }
- The walk between consecutive stops is worked out automatically: each stop is
  snapped to WALK_ROUTE and the route is followed the shorter way round.
- Mario's photos so far: kind.jpg, smile.jpg, robot.jpg (Dr. Fisherian's). Everything else is
  null, so those Polaroids show the official bigartloop.org photo. Adding a photo path to a
  stop replaces the official one with Mario's. A stop with a photo also gets a heart pin.
- The 24 Other SF Art pieces have `url: null` and an `artist` field instead of an ART entry:
  they have no page on bigartloop.org and no photo, so their Polaroids are blank gray
  squares and their drawer shows only title + artist, with "Read more" hidden.
  The Google map's own photos for them are googleusercontent links that 404 — don't bother.
- Resize new photos to ~1400px long side, JPEG ~q82, EXIF orientation applied
- Google Maps shows "lat, lng"; lngLat needs [lng, lat]

## Local preview
macOS blocks local servers from reading ~/Downloads, so a local preview has to
serve a copy from elsewhere. Map tiles, fonts and sprites were verified loading
from OpenFreeMap on localhost on 2026-09-27: all 3 stops, trail, pins, counter OK.

## Publishing
`gh` is installed and authenticated as mariodcunha (repo scope), so changes are
committed and pushed straight from the checkout. The default branch is master,
not main. Pages updates ~1–2 min after a commit; check with
`gh api repos/mariodcunha/mariodcunha.github.io/pages/builds/latest --jq .status`.
Working checkout: ~/Downloads/Claude Code/mariodcunha.github.io, a sparse clone
(`git sparse-checkout set big-art-loop`) so the other projects' ~500 MB of media
stays on the server.
There is a second, older checkout at ~/Projects/big-art-loop whose origin points at
github.com/mariodcunha/big-art-loop, a repo that does not exist. Nothing published
has ever come from it. Don't edit it.

## Open items
- The 24 Other SF Art pieces have no photo at all. Until Mario shoots them or a source
  turns up, a fifth of the loop is blank gray squares.
- ART data is a snapshot: re-check bigartloop.org now and then (R-Evolution is leaving;
  Traces is being refurbished). Card titles come from the Google map, drawer titles
  from bigartloop.org, so a few differ slightly (e.g. Traces, Where's the Ball).
- Real photographer credits, if Mario wants to change them
- smile.jpg / robot.jpg on GitHub are the full-size originals (1.6 MB / 5.3 MB), uploaded by
  Mario by hand; the resized ones (~0.6 MB) are in the local photos/ folder. Swap them in
  when convenient (Claude in Chrome's upload fails on files over ~300 KB).
