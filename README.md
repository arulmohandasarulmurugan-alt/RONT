# FrontEnd Lab: 41 Tasks Mini Project

**Author:** M. Arulmurugan  
**Register Number:** `24MIC0121`  
**Course:** FrontEnd Web Development Lab (`CSE2004 / SWE1002`)  
**Institution:** Vellore Institute of Technology (VIT), Vellore, Tamil Nadu  
**Academic Year:** 2025 – 2026  

---

## 🌐 Live Website

The project is hosted and accessible live at:  
👉 **[Shared Public App URL](https://ais-pre-27zj6wgm7ofafiuq3eefcf-756636904840.asia-northeast1.run.app)**

---

## 📖 Overview

A complete, standards-compliant FrontEnd laboratory suite containing all **41 academic tasks** built strictly with pure vanilla HTML5, CSS3, JavaScript, and Bootstrap 5.3.

### Key Features
- **Interactive Shell:** Responsive header, collapsible drawer sidebar with instant search filter by task number or keyword.
- **Jump to Task:** Dropdown + number input box + Go button for instant switching.
- **Isolated Sandbox Execution:** Each task runs inside a sandboxed `<iframe>` to prevent style or script pollution.
- **Code Inspector:** One-click **View Code** tab with syntax highlighting and a copy button.
- **Strict Constraint Enforcement:**
  - **Task 7 & 12:** Pure HTML, zero CSS.
  - **Task 13, 14, 17, 18:** Inline CSS only.
  - **Task 19:** Internal `<style>` tag only with zero inline CSS.
  - **Task 40:** Bootstrap 5.3 CDN link.
  - **Task 41:** Local downloaded Bootstrap files (`/assets/bootstrap/bootstrap.min.css` & `bootstrap.bundle.min.js`).
- **High-Definition Photography:** Authentic screenshots (XAMPP Control Panel, Notepad++) and real campus & travel photographs.

---

## 🚀 How to Publish to GitHub & GitHub Pages

### 1. Push to your GitHub Repository
In your terminal, run:

```bash
# 1. Initialize and configure Git
git init
git config user.name "M. Arulmurugan"
git config user.email "arulmohandasarulmurugan@gmail.com"

# 2. Add all files and commit
git add .
git commit -m "Initial commit: Complete FrontEnd Lab 41 Tasks Mini Project"

# 3. Create a new repository on GitHub (e.g., 'frontend-lab-41-tasks')
# 4. Link remote and push (replace YOUR_GITHUB_USERNAME with your username)
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/frontend-lab-41-tasks.git
git push -u origin main
```

### 2. Enable GitHub Pages (Free Hosting)
1. Go to your repository on GitHub: `https://github.com/YOUR_GITHUB_USERNAME/frontend-lab-41-tasks`
2. Click **Settings** (top right tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, select **Deploy from a branch**.
5. Set Branch to `main` and folder to `/(root)`.
6. Click **Save**.
7. In ~60 seconds, your site is live at:  
   `https://YOUR_GITHUB_USERNAME.github.io/frontend-lab-41-tasks/`

---

## ☁️ How to Deploy on Netlify (1-Click)

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder into the browser.
3. Your website is instantly deployed with a custom live URL and free SSL!

---

## 💻 Running Locally

### Option A: Python Built-in Server
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000/`.

### Option B: Node / Vite Dev Server
```bash
npm install
npm run dev
```

### Option C: Direct Browser Opening
Double-click `index.html` to open directly in Google Chrome, Edge, or Firefox.

---

## 📋 Complete Curriculum Tasks Table

| Task # | Section | Title | Constraint |
|:---:|:---|:---|:---|
| **Q1** | Section 1 | Local Web Server Installation & Verification | Visual XAMPP active execution & checklist |
| **Q2** | Section 1 | First Basic HTML Program | Notepad++ editor screenshot & HTML5 structure |
| **Q3** | Section 1 | Personal Portfolio Webpage | `<h1>`, real portrait photo, academic table, links, `<hr>`, footer |
| **Q4** | Section 1 | Travel Bucket List with Nested Lists | Nested `<ul>` (Countries & Activities), traveler name |
| **Q5** | Section 1 | Science & Technology Formatting | `<b>`, `<i>`, `<u>`, `<mark>`, `CO<sub>2</sub>`, `a<sup>3</sup> + b<sup>3</sup>` |
| **Q6** | Section 1 | Employee Profile Formatting | Highlighted rating, `E = mc<sup>2</sup>`, `CO<sub>2</sub>`, headings |
| **Q7** | Section 1 | Travel Destinations Page | **NO CSS AT ALL**; pure HTML `<div>` and real photos |
| **Q8** | Section 1 | Employee ID Card | Single outer `<div>`, border, photo, centered content |
| **Q9** | Section 2 | Dept of CS Navigation (`<div>` only) | `<div>` links opening in new tab (`target="_blank"`) |
| **Q10** | Section 2 | Website Layout using `<table>` | Header (colspan), left menu, content, footer (colspan) |
| **Q11** | Section 2 | Vertical Sidebar Navigation | Vertical menu (`<div>` tags) with dashboard content |
| **Q12** | Section 2 | Pure `<div>` Layout (`layout1.html`) | **NO CSS AT ALL**; HEADER, LEFT MENU, CONTENT, FOOTER |
| **Q13** | Section 3 | Hospital Management Header | **INLINE CSS ONLY**; Logo, Vellore branch, search, portal |
| **Q14** | Section 3 | CityCare Hospital Header Navbar | **INLINE CSS ONLY**; Logo, horizontal nav, "Book Appointment" |
| **Q15** | Section 3 | Dynamic Search Engine Header | HTML & CSS; category, price range, search input & button |
| **Q16** | Section 3 | Gaming Header & 70vh Banner | FIXED header, nav, 70% viewport height image slider banner |
| **Q17** | Section 4 | Company Profile (ApexCorp) | **INLINE CSS ONLY**; font styles, colors, alignment, borders |
| **Q18** | Section 4 | Library Management (2x2 Grid) | **INLINE CSS ONLY**; 2x2 colored blocks with images & labels |
| **Q19** | Section 4 | VIT Health Care Center Footer | **INTERNAL `<style>` ONLY** (strictly no inline CSS) |
| **Q20** | Section 5 | Employee Registration Form | HTML5 Form controls, 10+ standard fields |
| **Q21** | Section 5 | Student Login with Audio | HTML5 inputs, role radio, `<audio>` with playback controls |
| **Q22** | Section 5 | Technical Symposium Portal | Form validation + embedded `<video>` and `<audio>` controls |
| **Q23** | Section 5 | Patient Registration (20 Inputs) | **All 20 distinct HTML5 inputs** + CSS3 Box Model & Grid |
| **Q24** | Section 5 | Shopping Cart Multi-Step Checkout | Part A (Delivery), Part B (Payment), Part C (Cart Summary) |
| **Q25** | Section 6 | JS Employee Registration Table | JS empty validation + dynamic formatted output `<table>` |
| **Q26** | Section 6 | JS Student Login Inline Errors | JS validation with **RED error text near each input** + output `<div>` |
| **Q27** | Section 6 | JS Student Registration (Regex) | Regular expression validation for Name & Email, radio, checkbox |
| **Q28** | Section 6 | JS Course Registration (Multi-select) | Regex name validation + multi-select programming languages |
| **Q29** | Section 7 | Color Box Click & Hover | Mouse click cycles colors; mouseover shows text |
| **Q30** | Section 7 | Interactive Product Card | Real headphone photo; mouseover transforms; price reveal |
| **Q31** | Section 7 | Interactive Traffic Signal | Mouseover highlights Red/Yellow/Green with STOP/READY/GO |
| **Q32** | Section 7 | Weather Advisory Display | Mouseover highlights Sunny/Cloudy/Rainy with tips |
| **Q33** | Section 7 | Button Hover Greeting | Mouseover changes text to "Welcome to VIT!"; restore on leave |
| **Q34** | Section 8 | Student Search Keyboard Events | Key indicator display; Enter searches; Escape clears |
| **Q35** | Section 8 | ATM PIN Entry Screen | Numeric-only input; Enter submits; non-numeric warning |
| **Q36** | Section 8 | Product Search Dynamic Input | Input background changes color on typing; Enter searches |
| **Q37** | Section 8 | Online Exam Question Interface | Click selects option; Enter submits; hover highlights button |
| **Q38** | Section 8 | Campus Image Viewer (Arrow Keys) | Right/Left arrow switches campus photos; Enter selects |
| **Q39** | Section 8 | Travel Gallery (N, P, Spacebar) | N = Next, P = Previous, Spacebar displays destination name |
| **Q40** | Section 9 | College Events 2026 (Bootstrap CDN) | **BOOTSTRAP CDN LINK** navbar, cards, button & footer |
| **Q41** | Section 9 | Auth Portal (Local Bootstrap) | **LOCAL DOWNLOADED BOOTSTRAP FILES** (`bootstrap.min.css`) |

---
**Developed by M. Arulmurugan (24MIC0121)**  
Department of Computer Science & Engineering, VIT
