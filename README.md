# My Portfolio

![GitHub Repo Size](https://img.shields.io/github/repo-size/jananirangarajr/jananirangarajr.github.io)
![GitHub stars](https://img.shields.io/github/stars/jananirangarajr/jananirangarajr.github.io?style=social)
![GitHub forks](https://img.shields.io/github/forks/jananirangarajr/jananirangarajr.github.io?style=social)
![GitHub issues](https://img.shields.io/github/issues/jananirangarajr/jananirangarajr.github.io)

A **personal portfolio website** built with **React**. This project is designed to be **easily customizable** — anyone can clone it, update their personal details, and host their own portfolio.

---

## Live Demo

Check out the live site: [https://jananirangarajr.github.io/#home](https://username.github.io/repo-name)

---

## Features

* Modern, responsive design built with React
* All user details stored in a single `config.js` file for easy customization
* Easily update images in the `assets` folder
* Deployable to GitHub Pages, Netlify, or Vercel

---

## Tech Stack

* **React**
* **JavaScript (ES6+)**
* **CSS / SCSS**

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Update your personal details

Open `src/config.js` and update your information:
```javascript
export const userData = {
  name: "Your Name",
  role: "Your Role",
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  // Add more fields as needed
};
```

### 4. Replace images

Place your images inside the `assets` folder. You can replace existing images or add new ones.

### 5. Run locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### 6. Build for production

```bash
npm run build
```

The production-ready files will be in the `build/` folder.

---

## Deployment

### Using GitHub Pages

```bash
npm install --save gh-pages

# Add these scripts in package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Alternative

Deploy to **Netlify**, **Vercel**, or any static hosting service.

---

## ⚡ GitHub Actions Auto Deployment

This portfolio can be automatically deployed on every push to `main` using GitHub Actions. Example workflow (`.github/workflows/deploy.yml`):

Add a badge to show workflow status:

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jananirangarajr/jananirangarajr.github.io/deploy.yml?branch=main)

---

## Customization

1. Update `config.js` with your details
2. Replace images in the `assets` folder
3. Optionally, modify React components and CSS in `src/` for advanced customization

---

## Contributing

1. Fork the repo
2. Make changes to `config.js` and assets
3. Submit a pull request

---

## License

This project is licensed under the **MIT License**.
