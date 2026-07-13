# Faiza Khan Portfolio — Style Guide

## Design personality
The portfolio should feel like:
- Opening someone's real research notebook
- A diary that also happens to be a portfolio
- Organised chaos — structure underneath, 
  handmade feeling on top
- Personal, warm, curious, never quite finished

Inspired by: physical spiral notebooks, sticky note 
walls, scrapbook journaling, field research notes,
pressed botanical diaries.

NOT inspired by: startup landing pages, SaaS dashboards,
corporate UX portfolios, glassmorphism, gradients.

---

## Colour palette

### Page (the paper)
--paper:          #faf8f4   (warm white — the page)
--paper-warm:     #f5f2ea   (slightly warmer areas)
--ruled-line:     rgba(100, 85, 55, 0.08)
--margin-line:    rgba(192, 72, 56, 0.20)

### Ink
--ink:            #1e1a10   (never pure black)
--ink-soft:       #2e2a1e
--ink-mid:        #4a4435
--ink-muted:      #6e6555
--ink-faint:      #9a9080

### Notebook structure
--spine:          #3d4a2e   (dark olive cover)
--spine-dark:     #2d3820
--spine-text:     rgba(255, 255, 255, 0.32)
--tab-bg:         #ddd8cc
--tab-active:     #faf8f4   (matches page)

### Accent colours
--olive:          #5a6e48
--olive-light:    #7a9060
--olive-pale:     #d8e4cc
--terra:          #b85838
--terra-pale:     #f0ddd0
--red-thread:     #c04838
--mustard:        #c09830
--mustard-pale:   #f0e8c0

### Sticky note colours
--sticky-yellow:  #f5e860
--sticky-sage:    #a8c89a   (muted sage green)
--sticky-pink:    #e8b0c0   (dusty rose pink)
--sticky-blue:    #a0c0d8
--sticky-peach:   #f0c888
--sticky-lavender:#c8b8e8
--sticky-cream:   #ede8d8   (warm cream/beige)
--sticky-white:   #fffef5

### Tape colours
--tape-default:   rgba(205, 190, 152, 0.58)
--tape-green:     rgba(160, 200, 148, 0.48)
--tape-blue:      rgba(155, 185, 215, 0.45)
--tape-pink:      rgba(210, 160, 140, 0.42)

---

## Typography

### Font imports
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Caveat:wght@400;500;600;700&display=swap');

### Font roles
Playfair Display — headlines, case study titles,
                   editorial pull quotes
DM Sans         — body text, navigation, labels,
                   descriptions
Caveat          — handwritten annotations, sticky
                   note text, margin notes, tab
                   labels, page numbers

### Type scale
Hero headline:      72px  / Playfair Display 700 / lh 1.03
Section headline:   48px  / Playfair Display 700 / lh 1.08
Card title:         28px  / Playfair Display 700 / lh 1.1
Sub-headline:       20px  / Playfair Display 400 italic
Body large:         16px  / DM Sans 300           / lh 1.78
Body regular:       14px  / DM Sans 300           / lh 1.75
Caption:            12px  / DM Sans 400           / lh 1.6
Annotation:         15px  / Caveat 500            / lh 1.45
Sticky note body:   13px  / Caveat 400            / lh 1.42
Sticky note label:  9px   / Caveat 700 / uppercase / 0.1em
Margin note:        11px  / Caveat 500 / italic
Tab label:          12px  / Caveat 600 / vertical
Page number:        11px  / Caveat 400
Eyebrow label:      10px  / DM Sans 500 / uppercase / 0.14em

### Letter spacing
Eyebrow labels:     0.14em
Sticky note labels: 0.10em
Tab labels:         0.06em
Navigation:         0.02em

---

## Notebook UI — left spine

Width:              52px
Background:         #3d4a2e (dark olive)
Border right:       1px solid rgba(100,85,55,0.2)

Metal rings:
  Count:            12-14 rings evenly spaced
  Size:             18px diameter circles
  Border:           2px solid rgba(255,255,255,0.18)
  Background:       #1a1a10 (dark centre)
  Box shadow:       inset 0 1px 3px rgba(0,0,0,0.4)

Vertical text:
  Content:          OBSERVE — UNDERSTAND — MAKE SENSE — DESIGN
  Font:             Caveat 11px
  Colour:           rgba(255,255,255,0.30)
  Letter-spacing:   0.08em
  Writing-mode:     vertical-rl
  Transform:        rotate(180deg)

---

## Notebook UI — red margin line

Position:           64px from left edge of page
Width:              1px
Colour:             rgba(192, 72, 56, 0.20)
Height:             full page height

---

## Notebook UI — ruled lines

Background-image:   repeating-linear-gradient(
                      to bottom,
                      transparent 0px,
                      transparent 31px,
                      rgba(100,85,55,0.08) 32px
                    )
Covers:             full page width and height

---

## Notebook UI — right tabs

Container width:    44px
Background:         #ddd8cc
Border left:        1px solid rgba(100,85,55,0.18)

Individual tab:
  Height:           80px (5 tabs = 400px)
  Cursor:           pointer
  Transition:       all 0.28s ease

Tab paper element (::before):
  Position:         absolute right
  Width:            36px
  Height:           tab height - 12px (top/bottom padding)
  Background:       #e8e4da (inactive)
  Border:           0.5px solid rgba(100,85,55,0.18)
  Border-radius:    3px 0 0 3px
  Border-right:     none
  Box-shadow:       -2px 0 8px rgba(100,85,55,0.10)

Active tab:
  Background:       #faf8f4 (matches page)
  Width:            40px
  Box-shadow:       -3px 0 14px rgba(100,85,55,0.15)

Tab label:
  Font:             Caveat 12px 600
  Writing-mode:     vertical-rl
  Transform:        rotate(180deg)
  Colour inactive:  #6e6555
  Colour active:    #1e1a10

Coloured dot:
  Size:             6px circle
  Position:         right side of tab
  Colours:
    Work tab:       #5a6e48
    About tab:      #8a9070
    Thoughts tab:   #8a9070
    Notes tab:      #8a9070
    Contact tab:    #8a9070

---

## Sticky note system

### Structure
Padding:            10px 12px 13px
Box-shadow:         2px 3px 8px rgba(0,0,0,0.12)
Font-family:        Caveat

Label line:
  Font-size:        9px
  Font-weight:      700
  Letter-spacing:   0.10em
  Text-transform:   uppercase
  Opacity:          0.42
  Margin-bottom:    4px

Body text:
  Font-size:        13px
  Line-height:      1.42

### Rotation rules
ALWAYS rotate stickies — never perfectly straight.
Range: between -3deg and +3.5deg
Vary each sticky differently — no two the same angle.

### Sizes
Small:    110-120px wide  (compact info)
Medium:   138-150px wide  (standard)
Large:    160-175px wide  (longer text)

### Hover state
Box-shadow:   4px 6px 18px rgba(0,0,0,0.18)
Z-index:      raises above neighbours
Transition:   0.22s ease

---

## Tape strips

Every pinned element MUST have a tape strip.

Dimensions:
  Width:      32-52px (varies)
  Height:     14-18px
  Border-radius: 1px

Position:     top of element, slightly overlapping
Rotation:     -3deg to +3deg (opposite or similar 
              to element rotation)

Colours: use tape colour variables, vary per element

---

## Polaroid photo frames

White border:   10px sides, 10px top, 28-35px bottom
Box-shadow:     var(--sh-m)
Rotation:       -3deg to +2.5deg
Always has tape strip at top

---

## Torn paper edges

Used for: quote fragments, torn note papers

CSS clip-path on ::before or ::after pseudo-element:
clip-path: polygon(
  0% 100%, 2% 30%, 4% 80%, 7% 20%, 10% 75%,
  13% 25%, 16% 85%, 19% 15%, 22% 70%, 25% 35%,
  28% 90%, 31% 10%, 34% 65%, 37% 30%, 40% 80%,
  43% 20%, 46% 60%, 49% 40%, 52% 85%, 55% 15%,
  58% 70%, 61% 30%, 64% 80%, 67% 20%, 70% 65%,
  73% 35%, 76% 90%, 79% 10%, 82% 70%, 85% 30%,
  88% 80%, 91% 15%, 94% 65%, 97% 35%, 100% 55%,
  100% 100%
);

---

## Hand-drawn arrows

SVG path elements — not straight lines.
Use cubic bezier curves for organic feeling.
Stroke:           rgba(30, 26, 18, 0.35)
Stroke-width:     1.2px
Fill:             none
Arrowhead:        small triangle or open fork

---

## Red thread system

Used to connect related research elements.
SVG dashed path:
  Stroke:           #c04838
  Stroke-width:     0.9px
  Stroke-dasharray: 5 3.5
  Opacity:          0.48-0.52

Push-pin circles at connection points:
  Radius:           3.5-4px
  Fill:             #c04838
  Opacity:          0.65-0.72

---

## Margin notes

Position:     absolute, left: 8px of page content
Font:         Caveat 11px italic
Colour:       #c04838 at 0.58 opacity
Width:        54px
Text-align:   right
Pointer-events: none

Examples:
  "observe first!"
  "still true ✓"
  "notebook vol. 03"
  "the why →"
  "say hello 👋"

---

## SVG oval on "beyond"

The word "beyond" in the hero headline has a 
hand-drawn oval/ellipse around it.

Implementation:
  Position: absolute, over the word
  SVG ellipse or path — slightly irregular,
  not a perfect circle
  Stroke: #1e1a10 (ink colour)
  Stroke-width: 2-2.5px
  Fill: none
  Slight rotation: 1-2deg

---

## Botanical illustrations

Simple SVG line drawings — dried flowers, small sprigs.
Colour: rgba(100,85,55,0.35) — faded and delicate
Used: hero bottom corners, contact section, about page
Style: minimal, 2-3 strokes, pressed flower feeling

---

## Box shadows

--sh-s:  1px 2px 8px rgba(20,16,8,0.10)
--sh-m:  2px 4px 16px rgba(20,16,8,0.13)
--sh-l:  4px 8px 28px rgba(20,16,8,0.17)

---

## Buttons

Primary button:
  Background:       #5a6e48 (olive)
  Colour:           #ffffff
  Font:             DM Sans 500, 11.5px, uppercase, 0.09em
  Padding:          12px 26px
  Border-radius:    0 (square corners)
  Hover:            background #1e1a10

Ghost/text button:
  Background:       transparent
  Colour:           #1e1a10
  Border-bottom:    0.5px solid #1e1a10
  Padding-bottom:   2px
  Font:             DM Sans 400, 11.5px
  Hover:            arrow gap increases

---

## Animations

### Floating stickies
Three variants for natural variation:
  floatA: 7s ease-in-out infinite
  floatB: 9s ease-in-out infinite, delay 1.2s
  floatC: 8s ease-in-out infinite, delay 0.6s
Movement: translateY -5px to -7px at 50%
Rotation stays fixed while floating.

### Scroll reveal
Class: .reveal
Initial state: opacity 0, translateY 22px
Transition: opacity 0.85s ease, transform 0.85s ease
Trigger: IntersectionObserver, threshold 0.1
Stagger delays: 0.1s / 0.22s / 0.34s / 0.48s

### Tab navigation
Active tab updates on scroll automatically.
Smooth scroll to section on tab click.
Tab transition: 0.28s ease.

### Hero headline animation
Fade up on load, staggered per element:
  Eyebrow:    delay 0.1s
  Headline:   delay 0.2s
  Scribble:   delay 0.3s
  Sub-text:   delay 0.4s
  Buttons:    delay 0.5s
  Stats:      delay 0.62s

---

## Navigation bar

Position:         sticky top
Background:       rgba(250,248,244,0.94)
Backdrop-filter:  blur(8px)
Border-bottom:    0.5px solid rgba(100,85,55,0.14)
Padding:          16px 24px 16px 80px
                  (left padding clears margin line)

Logo: "faiza." in Playfair Display 700, 18px
      + small olive dot (7px circle, #5a6e48)

Nav links: DM Sans 400, 13px
Active underline: draws in from left on hover, 
                  colour: #b85838

---

## Page footer

Text left:   "© 2025 Faiza Khan · UX Researcher & 
              Service Designer · Dubai, UAE"
Text right:  "pg. 01 / ?? — more coming → ✏️"
             (in Caveat font — the notebook is 
              never finished)

---

## Do's ✓

- Rotate every sticky note — never perfectly straight
- Add tape to everything that is pinned
- Use margin notes to add personality and warmth
- Let stickies overlap each other slightly
- Use multiple sticky colours — cheerful chaos
- Add hand-drawn SVG arrows between connected ideas
- Keep ruled lines very subtle — paper not spreadsheet
- Show page number as "pg. 01 / ??" — always open
- Use "→" and "↳" annotation arrows in Caveat font
- Add botanical SVG illustrations for warmth
- Give photos a polaroid frame treatment

## Don'ts ✗

- No border-radius on main content containers
- No glassmorphism
- No gradients
- No perfectly centred symmetric layouts
- No more than 3 font families
- No pure black (#000000) — always use #1e1a10
- No identical sticky sizes and rotations
- No tape strips missing from pinned elements
- No startup landing page aesthetics
- No SaaS dashboard layouts
- No over-polished, corporate interfaces
