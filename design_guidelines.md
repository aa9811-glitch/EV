# EV Awareness Website - Design Guidelines

## Design Approach: Reference-Based (Modern Tech + Environmental)

**Primary Inspiration**: Tesla (clean, futuristic), Stripe (clarity, sophisticated visuals), Apple (minimalist product showcase)

**Design Philosophy**: Forward-thinking, optimistic, educational yet approachable. Emphasize innovation, sustainability, and technological advancement through clean aesthetics and purposeful interactions.

---

## Color Palette

### Light Mode
- **Primary Brand**: 142 76% 36% (Deep forest green - represents sustainability)
- **Secondary**: 142 60% 45% (Brighter green for accents)
- **Background**: 0 0% 99% (Near white)
- **Surface**: 0 0% 100% (Pure white)
- **Text Primary**: 220 15% 15% (Deep slate)
- **Text Secondary**: 220 10% 45% (Mid-tone slate)

### Dark Mode
- **Primary Brand**: 142 50% 55% (Lighter green for contrast)
- **Secondary**: 142 45% 65% (Soft green accent)
- **Background**: 220 15% 8% (Rich dark slate)
- **Surface**: 220 12% 12% (Elevated surface)
- **Text Primary**: 0 0% 95% (Near white)
- **Text Secondary**: 220 10% 70% (Light slate)

### Accent Colors
- **Electric Blue**: 210 100% 60% (For energy/charging indicators)
- **Success Green**: 142 70% 50% (For positive stats)
- **Warning Amber**: 38 90% 55% (For alerts, sparingly)

---

## Typography

**Font Families**: 
- Primary: 'Inter' (Google Fonts) - modern, technical clarity
- Display: 'Clash Display' or 'Outfit' - bold headings

**Scale**:
- Hero Display: text-6xl/text-7xl, font-bold (56-72px)
- Section Headers: text-4xl/text-5xl, font-bold (36-48px)
- Subsection: text-2xl/text-3xl, font-semibold (24-30px)
- Body Large: text-lg (18px)
- Body: text-base (16px)
- Caption: text-sm (14px)

---

## Layout System

**Spacing Primitives**: Use Tailwind units 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Text-heavy sections: `max-w-4xl`
- Interactive components: `max-w-6xl`

**Vertical Rhythm**: 
- Desktop sections: `py-24` to `py-32`
- Mobile sections: `py-16`
- Component spacing: `space-y-12` to `space-y-16`

---

## Page Structure & Components

### Hero Section (100vh)
- **Layout**: Full-viewport immersive experience
- **Content**: Large heading about EV revolution, supporting subtext, dual CTAs
- **Visual**: Large hero image - modern EV charging at a sleek station, early morning/dusk lighting, photographic quality
- **Background**: Subtle gradient overlay (forest green to dark) at 40% opacity over image
- **CTA Buttons**: Primary solid, secondary with blurred background (backdrop-blur-md bg-white/20)

### Benefits Overview (3-column grid on desktop)
- **Cards**: Icon + title + description, soft shadows, hover lift effect
- **Icons**: Heroicons (consistent style)
- **Content**: Environmental impact, cost savings, performance, convenience

### Charging Systems Section (2-column alternating)
- **Layout**: Image + content alternating left/right
- **Visuals**: Illustrations or photos of Level 1, Level 2, DC Fast charging
- **Format**: Title, technical specs in clean tables, benefits list

### Interactive SOC Simulator (Full-width featured section)
- **Background**: Distinct surface color (elevated card on dark, subtle on light)
- **Layout**: Controls on left (40%), visualization on right (60%)
- **Controls**: Sliders for battery capacity (kWh), charging power (kW), current SOC (%)
- **Visualization**: Large circular progress indicator (SVG), real-time statistics cards below
- **Color Coding**: Progress ring uses gradient from primary green to electric blue
- **Stats Display**: Grid of 3-4 metric cards showing time to full charge, current rate, energy added

### Sustainability Impact
- **Layout**: Stats grid (4 columns) + narrative text
- **Visual Treatment**: Large numbers with animated counters, supporting icons
- **Content**: CO2 reduction, fuel savings, renewable energy percentage

### Footer
- **Structure**: 3-column (About, Quick Links, Newsletter signup)
- **Elements**: Social icons, trust indicators ("Powered by clean energy data"), contact info
- **Style**: Reduced opacity text, clean separation from main content

---

## Component Library

**Buttons**:
- Primary: bg-primary text-white, hover scale-105
- Secondary: border-2 border-primary text-primary, hover bg-primary/10
- Outline on images: backdrop-blur-md bg-white/20 border border-white/30

**Cards**:
- Standard: rounded-2xl border border-slate-200 dark:border-slate-800 p-8
- Hover: shadow-lg transition-shadow
- Featured: Add subtle green border-l-4 accent

**Form Inputs** (for simulator):
- Range sliders: Custom styled with green track, large thumb
- Labels: text-sm font-medium mb-2
- Help text: text-xs text-secondary

**Data Visualization**:
- Progress rings: 8px stroke width, rounded caps
- Charts: Clean line charts with grid background
- Tooltips: Dark background, white text, rounded corners

---

## Images

**Hero Image**: Modern electric vehicle at charging station, photorealistic, high-quality (1920x1080 minimum). Show charging cable connected, sleek station design, professional automotive photography aesthetic.

**Section Images**: 
- Charging systems: Clear technical diagrams or clean product photos of different charger types
- Environmental section: Nature scenes, renewable energy (solar/wind farms), clean aesthetic

**Image Treatment**: Subtle overlays where needed, consistent color grading towards cooler/green tones

---

## Animations

**Purposeful Motion Only**:
- Hero: Fade-in on load (0.8s)
- Scroll reveals: Sections fade-in-up on scroll into view
- Interactive simulator: Smooth value transitions (0.3s ease)
- Hover states: Scale transforms (scale-105, 0.2s)
- Counter animations: Number increments for statistics

---

## Accessibility

- Dark mode toggle prominent in header
- All form inputs maintain consistent styling in both modes
- Sufficient contrast ratios (WCAG AA minimum)
- Focus states: 2px ring with primary color offset
- Keyboard navigation fully supported in simulator