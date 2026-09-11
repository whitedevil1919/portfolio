# Bolisetty Sri Nikhil — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy to GitHub Pages](https://github.com/whitedevil1919/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/whitedevil1919/portfolio/actions/workflows/deploy.yml)

A professional, minimal, creative, and fully responsive developer portfolio website designed for **Bolisetty Sri Nikhil**. Built with React 19, Vite 8, and modular Vanilla CSS with full dark/light mode theming and seamless GitHub Pages deployment.

---

## 🚀 Live Demo

- **GitHub Pages:** [whitedevil1919.github.io/portfolio](https://whitedevil1919.github.io/portfolio)

---

## 🛠️ Technologies Used

- **Frontend Library:** React 19
- **Build Tool & Dev Server:** Vite 8
- **Styling:** Modular Vanilla CSS with responsive CSS Custom Properties & Design Tokens
- **Icons:** `lucide-react`
- **Linting:** `oxlint` (fast static code analysis)
- **Deployment:** GitHub Actions + GitHub Pages

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── images/             # Profile photos & certificate images
│   ├── icons.svg           # Scalable vector icons
│   ├── favicon.svg         # Modern vector favicon
│   └── BOLISETTY SRI NIKHIL.pdf # SIH Participation Certificate PDF
├── src/
│   ├── components/
│   │   ├── Navbar/         # Header navigation & theme toggle
│   │   ├── Hero/           # Headline & profile presentation
│   │   ├── About/          # Biography, focus areas, career goal & resume
│   │   ├── Skills/         # Categorized technical skills
│   │   ├── Projects/       # Project case study cards
│   │   ├── Experience/     # Work experience timeline
│   │   ├── Education/      # Academic degrees & coursework
│   │   ├── Certifications/ # Technical credentials & certificate image showcase
│   │   ├── Achievements/   # Milestones & contests
│   │   ├── Contact/        # Contact form & social channels
│   │   └── Footer/         # Footer links & copyright
│   ├── data/
│   │   └── portfolio.js    # Central data file (content updates go here!)
│   ├── styles/
│   │   ├── globals.css     # CSS reset, typography, layout utilities
│   │   └── variables.css   # Color palette & theme tokens (dark/light)
│   ├── App.jsx             # Main layout & theme coordination
│   ├── main.jsx            # Application entry point
│   └── index.css           # Root styles
├── .gitignore              # Complete Git ignore specifications
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # HTML shell with Open Graph & SEO meta tags
├── LICENSE                 # MIT Open Source License
├── package.json            # Project dependencies and npm scripts
├── README.md               # Project documentation
└── vite.config.js          # Vite build configuration (base: './')
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whitedevil1919/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Run the linter:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory.

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## ⚙️ How to Update Content

All content is decoupled from UI code and located in a single centralized file:
📂 **`src/data/portfolio.js`**

- **Personal Details:** Update `personalInfo` (name, title, contact information).
- **Work Experience:** Modify `experience` array.
- **Certifications:** Update `certifications.featured` or `certifications.list`.
- **Projects:** Add new projects to the `projects` array.
- **Skills:** Add or edit skills in the `skills` array.

---

## 🌐 GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the portfolio on every push to the `main` branch.

### Enabling GitHub Pages:
1. Go to your repository on GitHub: **`whitedevil1919/portfolio`**.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
5. GitHub will run the workflow and publish your site at:
   `https://whitedevil1919.github.io/portfolio`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
