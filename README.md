# KURZAN — Premium Football Freestyle Portfolio

> **"MORE THAN A GAME. IT'S AN ART."**  
> Official portfolio website for international Football Freestyler, Performer, and Content Creator **KURZAN** ([@kurzannn](https://www.instagram.com/kurzannn?dlrf=cWh3Mmc1Y2Viampi&utm_source=qr)).

Inspired by the dark, high-octane visual identity of elite sports brands (Nike Football, Adidas, Red Bull athletes), this website presents football freestyle as a fine art form — merging athletic explosive power, choreography, street culture, and cinematic storytelling.

---

## ⚡ Key Highlights & Features

- **Dark Cinematic Aesthetic**: Deep black (`#080808`), charcoal glassmorphism, athletic typography, and electric volt accents (`#ccff00`).
- **Hero Video Showcase**: Full-screen looping performance background with dark gradient overlay, oversized athlete typography, and live HUD metrics.
- **Two-Column Editorial About**: Personal journey from asphalt street sessions to international stages, athletic pillars, and interactive Press Kit / Media Deck.
- **Interactive Freestyle Disciplines Matrix**: Deep dive into Lowers, Uppers & Stalls, Sitdowns, and Groundmoves/Panna with difficulty indicators and signature moves.
- **Filterable Video Gallery**:
  - *Best Freestyle Tricks*
  - *Street Performances*
  - *Football Challenges*
  - *Freestyle Journey*
  - *Creative Edits*
  - Fullscreen cinematic video player modal + instant Instagram Reels and YouTube links.
- **Works & Collaborations**: Editorial showcase of brand campaigns, stadium halftime shows, commercial video shoots, and youth masterclasses.
- **Editable Milestones & Accolades**: Bold, easily customizable achievement metrics.
- **Interactive Booking Portal**: Tailored inquiry form with service chips (Halftime Shows, Brand Collabs, Commercials, Coaching), direct email pre-fill, and scannable mobile Instagram QR code.
- **Synthesized Ambient Soundscape**: Hypnotic low-frequency street/stadium audio pulse powered by the Web Audio API (zero external MP3 files).
- **Custom Athletic Cursor**: Magnetic cursor with trailing ball target ring and auto-disable for touch devices.

---

## 📁 Project Architecture

```text
kurzan-portfolio/
├── index.html                   # Production HTML entry point
├── server.js                    # Fast zero-dependency local Node.js server
├── build.js                     # High-speed bundler (compiles JSX into bundle.js)
├── package.json                 # Project configuration & npm scripts
├── public/
│   ├── bundle.js                # Production React bundle
│   └── babel.min.js             # Babel standalone tool
└── src/
    ├── App.jsx                  # Main application orchestrator
    ├── data/
    │   └── portfolioData.js     # 🎯 CENTRAL CONTENT HUB (Edit everything here!)
    └── components/
        ├── Navbar.jsx           # Fixed navigation, audio toggle & mobile drawer
        ├── Hero.jsx             # Cinematic full-screen landing with video loop
        ├── About.jsx            # Editorial athlete introduction & pillars
        ├── TrickMatrix.jsx      # Interactive freestyle skill breakdown
        ├── Videos.jsx           # Filterable video gallery with featured hero
        ├── Works.jsx            # Commercial and live project portfolio
        ├── Achievements.jsx     # Bold numbers & milestone cards
        ├── Contact.jsx          # Interactive booking form & direct channels
        ├── Footer.jsx           # Watermark, quick links & legal
        ├── VideoModal.jsx       # Modal popup for video playback
        ├── MediaKitModal.jsx    # Press Kit / Rider preview modal
        ├── QrCodeModal.jsx      # Instagram QR code scanner modal
        ├── CustomCursor.jsx     # Magnetic interactive cursor
        └── AudioAmbience.jsx    # Web Audio API ambient sound generator
```

---

## 🚀 Quick Start (Running Locally)

### Option 1: Run with Node.js
Open your terminal in the project directory and run:

```bash
node server.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Direct Browser Launch
Because the application is compiled into `public/bundle.js` with pure React 18, you can also double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox!

---

## ✏️ How to Customize & Add Content

All text, videos, images, and links are cleanly separated in:
`src/data/portfolioData.js`

### 1. Update Social Media Links
```javascript
export const athleteInfo = {
  instagram: {
    handle: "@kurzannn",
    url: "https://www.instagram.com/kurzannn?dlrf=cWh3Mmc1Y2Viampi&utm_source=qr",
  },
  youtube: {
    handle: "@kurzannn",
    url: "https://www.youtube.com/@kurzannn",
  },
  email: "kurzanfreestyle@gmail.com",
  ...
};
```

### 2. Add or Edit Videos
To add a new video to the gallery, simply add an entry to the `videoGallery` array in `src/data/portfolioData.js`:
```javascript
{
  id: "vid-09",
  title: "Your New Trick Title",
  category: "BEST FREESTYLE TRICKS", // Choose from categories
  isFeatured: false,
  thumbnail: "https://your-image-url.com/photo.jpg",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID/",
  duration: "01:30",
  tags: ["Combos", "Upper Stall"],
  description: "Description of the trick or performance...",
  date: "Latest Highlight"
}
```

### 3. Rebuild the Production Bundle
Whenever you make changes to files inside `src/`, run:

```bash
node build.js
```

This compiles your changes in seconds into `public/bundle.js`.

---

## 🌐 Free 1-Click Deployment

You can deploy this site in under 60 seconds to any modern hosting platform:

### Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **"Deploy"** (no build settings required).

### Netlify
1. Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Your site is live instantly on a custom URL with free SSL!

### GitHub Pages
1. Push to your GitHub repo.
2. Go to **Settings > Pages** and select the `main` branch.
3. Your site will be published at `https://yourusername.github.io/repository-name`.

---

## 📸 Connected Official Profiles
- **Instagram**: [@kurzannn](https://www.instagram.com/kurzannn?dlrf=cWh3Mmc1Y2Viampi&utm_source=qr)
- **YouTube**: [@kurzannn](https://www.youtube.com/@kurzannn)

---

© 2026 KURZAN. All Rights Reserved. Built for elite athletic performance.
