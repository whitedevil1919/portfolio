# Bolisetty Sri Nikhil - Developer Portfolio

A professional, minimal, creative, and responsive developer portfolio website designed for Bolisetty Sri Nikhil. Built using React, Vite, and modular Vanilla CSS, featuring full dark and light mode themes.

## 🚀 Technologies Used

- **Framework:** React 19 + Vite 8
- **Styling:** Modular Vanilla CSS with responsive CSS Custom Properties
- **Icons:** `lucide-react` for modern, lightweight developer icons

---

## 📁 Project Structure

```text
portfolio/
│
├── public/
│   ├── images/
│   │   └── profile/        # Location for real profile photo
│   ├── icons/              # Site icons and favicons
│   └── resume/             # Location for PDF resume
│
├── src/
│   ├── components/
│   │   ├── Navbar/         # Navigation & theme toggle
│   │   ├── Hero/           # Headline & profile placeholder
│   │   ├── About/          # Biography & career goal & resume
│   │   ├── Skills/         # Categorized skills layout
│   │   ├── Projects/       # Reusable project case study card
│   │   ├── Experience/     # Work experience timeline
│   │   ├── Education/      # Degrees & subjects card
│   │   ├── Certifications/ # Certifications placeholders
│   │   ├── Achievements/   # Milestones placeholders
│   │   ├── Contact/        # Message form & mail/phone links
│   │   └── Footer/         # Navigation links & socials
│   │
│   ├── data/
│   │   └── portfolio.js    # CENTRAL DATA FILE (Only edit this to update content!)
│   │
│   ├── assets/             # Shared local assets (React icons/logos)
│   │
│   ├── styles/
│   │   ├── globals.css     # Base reset & layouts
│   │   └── variables.css   # Color palette (Light/Dark mode)
│   │
│   ├── App.jsx             # App layout & theme coordination
│   └── main.jsx            # Entrypoint
│
├── .gitignore
├── README.md
├── package.json
└── vite.config.js
```

---

## 💻 Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run in development mode (local host):**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This generates optimized, production-ready static assets in the `/dist` directory.

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🛠️ How to Customize Your Content

All data is separated from the UI components. To update any text, links, or sections, edit the data file:
📂 **[src/data/portfolio.js](file:///c:/Users/B.Sri%20Nikhil/practice/src/data/portfolio.js)**

### 1. Replacing the Profile Photo
1. Place your professional photograph (e.g., `srinikhil.jpg`) into:
   📂 `public/images/profile/srinikhil.jpg`
2. Update the `profilePhoto` field in [src/data/portfolio.js](file:///c:/Users/B.Sri%20Nikhil/practice/src/data/portfolio.js):
   ```javascript
   personalInfo: {
     ...
     profilePhoto: "/images/profile/srinikhil.jpg",
   }
   ```
   The website will automatically hide the placeholder silhouette and display your photo inside the styled hero frame.

### 2. Attaching Your Resume
1. Place your resume PDF (e.g., `resume.pdf`) into:
   📂 `public/resume/resume.pdf`
2. Open [src/components/About/About.jsx](file:///c:/Users/B.Sri%20Nikhil/practice/src/components/About/About.jsx), change the disabled state of the button and link it to the file path:
   ```jsx
   // In About.jsx:
   // Change:
   <button className="resume-btn" disabled ...>
   
   // To an anchor link:
   <a href="/resume/resume.pdf" download className="resume-btn">
   ```
3. Update the button text in [src/data/portfolio.js](file:///c:/Users/B.Sri%20Nikhil/practice/src/data/portfolio.js) under `about`:
   ```javascript
   resumePlaceholder: "Download Resume"
   ```

### 3. Adding New Projects
To add a new project or replace the placeholder, add a new object to the `projects` array in [src/data/portfolio.js](file:///c:/Users/B.Sri%20Nikhil/practice/src/data/portfolio.js):
```javascript
{
  id: "project-unique-id",
  name: "My Awesome Project",
  shortDescription: "A short summary of what the project does.",
  problemPurpose: "To solve problem X by doing Y.",
  contribution: "Designed UI/UX and built backend REST APIs.",
  technologies: "React, Node.js, Express, MongoDB",
  keyFeatures: [
    "Feature 1 details",
    "Feature 2 details",
    "Feature 3 details"
  ],
  github: "https://github.com/your-username/repo-name",
  liveDemo: "https://my-demo-link.com"
}
```
If you omit or leave the `github` or `liveDemo` as `"[Coming Soon]"`, the link button will gracefully render as disabled.

### 4. Updating Certifications & Achievements
Edit the `certifications` list or `achievements` array in [src/data/portfolio.js](file:///c:/Users/B.Sri%20Nikhil/practice/src/data/portfolio.js). The UI updates dynamically.

---

## 🌐 Deployment Instructions

Since this is a standard React + Vite SPA, you can deploy the generated `/dist` folder to any static hosting provider:

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`

### Netlify
1. Drag and drop the `dist/` folder into your Netlify dashboard, or:
2. Use Netlify CLI: `netlify deploy`

### GitHub Pages
Configure your repository build settings to run `npm run build` and point the publishing directory to `dist/`.
