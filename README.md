# Akhil Varghese — Portfolio

A warm, personal software engineer portfolio built with **React + Vite + Tailwind CSS**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── constants/
│   └── data.js          ← ✏️  All your data lives here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customising Your Content

All personal data is in **`src/constants/data.js`**. Just edit:

- `PROFILE` — your name, bio, location, stats, social links
- `SKILLS` — grouped by category (Frontend / Backend / DevOps)
- `PROJECTS` — add/remove projects with tag, name, description, techs, links
- `EXPERIENCE` — your work history

No need to touch any component files.

## Contact Form

The form in `Contact.jsx` logs to console by default. To make it live, replace the `handleSubmit` logic with one of:

- [Formspree](https://formspree.io) — simplest, no backend needed
- [EmailJS](https://emailjs.com) — send email directly from the browser
- Your own API endpoint

## Deployment

Works great on **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build
# Upload the `dist/` folder
```
