# Sabka Sarkar — Twitter/X Visual Identity (Handoff)

**Created:** 2026-06-13
**Purpose:** On-brand Twitter/X assets for the promotion phase, anchored to the CJP Pune protest moment.
**Status:** ✅ Complete, rendered, and verified.

---

## 1. Deliverables

| File | Dimensions | Where it goes |
|------|-----------|---------------|
| `sabka-sarkar-avatar.png` | 1000×1000 | **Profile picture.** Upload as-is — Twitter auto-crops to a circle. |
| `sabka-sarkar-banner.png` | 1500×500 | **Header banner** (Twitter's exact spec). |
| `sabka-sarkar-pinned-card.png` | 1600×900 | Image for the **first pinned tweet** (protest tie-in). |

### Support / reference files
| File | Purpose |
|------|---------|
| `avatar-circle-preview.png` | Shows how the avatar looks after Twitter's circle crop. Reference only — do **not** upload this one. |
| `avatar.html` | Editable source for the avatar. |
| `banner.html` | Editable source for the banner. |
| `pinned-card.html` | Editable source for the pinned-tweet card. |

### Pre-existing (NOT mine)
`twitter-banner.png` and `twitter-profile.png` (dated 2026-06-12) are from an earlier, superseded attempt. Safe to delete once the new set is confirmed.

---

## 2. Design direction (user-confirmed)

- **Avatar:** abstract **tricolor "rising bars" emblem** — **saffron → white → green** (true Indian-flag order), ascending left-to-right = civic progress / people rising. **No text** (maximizes legibility at ~48px in the feed). Tuned to sit fully inside the circle-safe zone.
  - **Note (2026-06-13 revision):** the middle bar was originally ink/black for legibility on the paper ground, but was changed to **white** to keep the tricolor true (avoids any "why did you alter the flag?" criticism). The white bar uses a hairline warm outline (`#5c5141` @ 34% opacity) + soft shadow so it stays visible on the off-white background.
  - The short **baseline rule** under the bars and the wordmark text remain **ink** on purpose — they are a ground line / type, not part of the tricolor, so they don't sit *inside* the flag colors.
- **Palette (revised 2026-06-14):** **clean cool near-white** ground (NOT the old warm `#f4efe7` cream — that read as generic/Claude), ink text, punchy saffron/green accents, a **navy Ashoka-chakra** watermark, and a tricolor rail whose white centre is framed with ink hairlines so it stays visible. Realigns the Twitter set to the site's new light "editorial agitprop" theme.
- **Banner copy:** eyebrow "AN OPEN THOUGHT EXPERIMENT FOR INDIA" + **Teko condensed-caps** headline *"IF THE BEST OF OUR GENERATION RAN THE COUNTRY."* (accent word in saffron) + wordmark `SABKA SARKAR` / `सबकी सरकार` + `sabkasarkar.com`.
- **Pinned card copy:** *"You are protesting for accountability. WE BUILT THE ROADMAP."* + one-line plan summary + non-partisan tagline.

### Brand tokens (source of truth: `src/lib/brand.ts` → site `globals.css` + `og.tsx`)
| Token | Hex |
|-------|-----|
| Saffron | `#ff8a1f` |
| Paper (cool near-white) | `~#f1f4f8` ground / `#ffffff` |
| India green | `#0f7a2e` |
| Ink (near-black) | `#14110d` |
| Saffron-ink (eyebrow text) | `#b8631a` |
| Ashoka navy (chakra) | `#21317f` |
| Fonts | **Teko** (condensed display/headline + wordmark, Latin+Devanagari), Inter (eyebrow/UI), Tiro Devanagari Hindi (सबकी सरकार) — Google Fonts |

These match the site's design system (`src/lib/brand.ts`) so the account reads as the same brand. The faint navy chakra in each asset is built by an inline `<script>` at render time (Chrome runs JS — the `--virtual-time-budget` covers it).

---

## 3. How to re-render (after editing any `.html`)

Requires **Google Chrome** (headless screenshot = crispest text/font rasterizer). Fonts load from Google Fonts via `<link>`; `--virtual-time-budget` waits for them to settle.

```bash
cd social-assets
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Avatar (1000×1000)
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=3000 --default-background-color=00000000 \
  --window-size=1000,1000 --screenshot="sabka-sarkar-avatar.png" "$(pwd)/avatar.html"

# Banner (1500×500)
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=3500 --default-background-color=00000000 \
  --window-size=1500,500 --screenshot="sabka-sarkar-banner.png" "$(pwd)/banner.html"

# Pinned card (1600×900)
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=3500 --default-background-color=00000000 \
  --window-size=1600,900 --screenshot="sabka-sarkar-pinned-card.png" "$(pwd)/pinned-card.html"
```

### Regenerate the circle preview (needs ImageMagick `magick`)
```bash
magick sabka-sarkar-avatar.png \
  \( +clone -alpha transparent -fill white -draw "circle 500,500 500,40" \) \
  -compose copyopacity -composite avatar-circle-preview.png
```

---

## 4. Verification performed

- ✅ Exact dimensions confirmed via `magick identify` (1000×1000 / 1500×500 / 1600×900).
- ✅ Avatar legibility checked by downscaling to 48×48 — three tricolor bars (saffron/white/green) still read clearly, white bar distinct.
- ✅ Circle-crop preview confirms the emblem stays inside Twitter's circular mask.
- ✅ Banner avatar-collision check: simulated Twitter's bottom-left avatar overlay — clears the emblem and all text.
- ✅ Fraunces serif + Devanagari render correctly; tricolor rail and saffron URL present.

---

## 5. Upload checklist (Twitter/X)

1. **Profile photo** → upload `sabka-sarkar-avatar.png`.
2. **Header** → upload `sabka-sarkar-banner.png`.
3. **First tweet** → post with `sabka-sarkar-pinned-card.png`, then **pin** it.
4. Bio link → `sabkasarkar.com`.
5. (Optional) Delete superseded `twitter-banner.png` / `twitter-profile.png`.

---

## 6. Open / next steps (not yet done)

- **Dark variant** of the set (to match OG cards exactly) for an A/B test — *not built yet; ask if wanted.*
- **Instagram carousel slides** — copy already drafted in chat, not yet rendered to images.
- **Hindi tweet versions** — drafted verbally, not finalized.
- Tweet copy + posting schedule live in the chat thread, not in this folder.
