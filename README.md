# KuzmaDev.com

Personal portfolio of **Vasyl Kuzma**, Full-stack Developer (React, Node.js) in Prague.

**Live:** https://kuzma-dev-com.vercel.app

## What's inside

- **Home**: animated particle background, links to GitHub, LinkedIn, Telegram, phone and email.
- **About**: summary, services, skills, experience and education timeline, languages, CV download.
- **Portfolio**: commercial and client projects (Sanjo BuildTrack, Sanjo Tool Tracker, TaisiyaStyle) and study/team projects, each with role and stack.
- **Blog**: posts about the projects, each on its own page (`/blog/:id`).
- **Contact**: form validated with Formik and Yup, sent to the [backend](https://github.com/kuzmavasil74/KuzmaDev.com.back-end), which delivers it by email.

## Stack

React 18, Vite 5, React Router 6, react-transition-group, Formik + Yup, CSS Modules. Hosted on Vercel.

## Run locally

Requires Node.js 24 (set in `package.json` `engines`, Vercel builds with it).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build on http://localhost:4173
npm run lint
```

The contact form posts to `VITE_API_URL` (see `.env.example`). Without it, the form uses the production API on Render.

## Project layout

```
public/                 static files served as-is: images, CV PDF, robots.txt, sitemap.xml
src/
  App.jsx               routes, page transitions, page titles; pages are lazy-loaded
  components/           Header (burger menu), Footer, BlogPost
  pages/                Home, About, Portfolio, Blog, Contact, NotFound
  data/                 projects.json and blogPosts.json: edit these to change content
  utills/               API call and form validation schema
vercel.json             SPA rewrite to index.html and cache headers
```

## Editing content

- **Add a project:** append an object to `commercial_projects` or `projects` in `src/data/projects.json` (`title`, `imageUrl`, `url`, `description`, `stack`, `role`, `type`) and put a screenshot in `public/images/projects/`. A 1200 px wide JPEG keeps the page fast.
- **Add a blog post:** append to `src/data/blogPosts.json` with the next `id`, then add its URL to `public/sitemap.xml`.
- **Update the CV:** replace `public/Vasyl_Kuzma_CV.pdf`. Its source is the [Resume-Vasyl-Kuzma](https://github.com/kuzmavasil74/Resume-Vasyl-Kuzma) repository.

## Contact

kuzmavasil.v@gmail.com · [LinkedIn](https://www.linkedin.com/in/vasylkuzma) · [Telegram](https://t.me/Vasyl_Kuzma)
