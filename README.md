# ZenithSui — Premium Silk Sarees

> A full-featured e-commerce React app — cart, checkout, Indian payments, and admin panel.  
> Powered by React 18 + Vite. Deploys automatically to GitHub Pages.

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🛍 Full E-Commerce | Homepage · Product Listing · Product Detail · Cart · Checkout |
| 🛒 Smart Cart | Add, remove, quantity control — persisted in localStorage |
| 💳 Indian Payments | UPI (Paytm, PhonePe, GPay, BHIM) · Cards · Net Banking · EMI · COD |
| 📦 Bundle Discounts | Buy 2 → 15% · Buy 3 → 20% · Buy 4 → 25% |
| 🔍 Live Search | Search across product name, fabric, and tags |
| 📱 Fully Responsive | Mobile, tablet, and desktop — hamburger menu included |
| 🔡 Elegant Typography | Cormorant Garamond + EB Garamond + Josefin Sans |
| 🏪 Admin Panel | Login · Order management · Status updates · New order notifications |
| 🚀 Auto Deploy | GitHub Actions builds and deploys on every push to `main` |

---

## 📁 File Structure

```
zenithsui/
├── src/
│   ├── main.jsx             # App entry point + localStorage polyfill
│   └── App.jsx              # Full e-commerce app (all pages + components)
├── public/
│   └── assets/
│       ├── zenithsui-logo.svg
│       ├── favicon.svg
│       └── images/
│           └── zs-royal-brocade-maroon-1.png
├── index.html               # Vite HTML template
├── vite.config.js           # Vite config (base: './')
├── package.json
└── .github/
    └── workflows/
        └── pages.yml        # Build → Deploy to GitHub Pages
```

---

## 🚀 Publish to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and create a new **public** repository
2. Name it anything, e.g. `zenithsui`

### Step 2 — Upload the files

**Option A — Drag & Drop (easiest)**
1. Open your new repo on GitHub
2. Click **"uploading an existing file"**
3. Drag the entire contents of this folder into the browser
4. Commit

**Option B — Git (recommended)**
```bash
cd zenithsui-github-final_3
git init
git add .
git commit -m "Initial ZenithSui e-commerce site"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 4 — Done!

GitHub Actions will automatically build and deploy your site.  
Your store goes live at: `https://<your-username>.github.io/<repo-name>/`

> **Note:** The first deploy takes ~2 minutes. Check the **Actions** tab to watch the progress.

---

## 🖥 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🔐 Admin Panel

- URL: Click the 🔑 key icon in the top right header
- Username: `admin`
- Password: `admin123`

The admin panel shows all orders placed on this browser. Orders are stored in `localStorage`.

---

## 🎨 Color Palette

| Name | Hex |
|---|---|
| Deep Maroon | `#240506` |
| Gold | `#c89c32` |
| Cream | `#fffaf0` |
| Ink | `#2a0d0d` |

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool
- **localStorage** — Cart + order persistence
- **Google Fonts** — Cormorant Garamond, EB Garamond, Josefin Sans
- **GitHub Pages** — Hosting (free)
- **GitHub Actions** — Auto CI/CD pipeline
