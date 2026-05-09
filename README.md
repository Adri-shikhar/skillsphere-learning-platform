# SkillSphere – Online Learning Platform

A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs covering Web Development, Design, Data Science, Marketing, and more.

## Live URL

[https://skillsphere-learning-platform.vercel.app](https://skillsphere-learning-platform.vercel.app)

## Purpose

SkillSphere helps learners discover expert-led courses, track their progress, and manage their profiles — all in one place. Instructors are highlighted and top-rated courses are surfaced on the home page so users can jump straight into learning.

## Key Features

- **Browse all courses** — 20+ courses across Development, Design, Data Science, Marketing, Business and more
- **Course details** — full description, curriculum, instructor info, rating, duration, and level
- **Protected routes** — course details and profile require authentication
- **Email & Google authentication** — sign up / sign in via email-password or Google OAuth (Better Auth)
- **User profile** — view and update display name and profile photo URL
- **Top-rated courses** — home page highlights the 3 highest-rated courses
- **Top instructors** — instructor cards ranked by average course rating
- **Learning tips** — study techniques and time management advice
- **Trending courses** — marquee ticker showing latest enrollment milestones
- **Toast notifications** — success and error feedback throughout the app
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Not-found page** — custom 404 for unknown routes
- **Loading states** — spinner shown while data is fetching

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, server components, dynamic routes
- [Tailwind CSS v4](https://tailwindcss.com)
- [DaisyUI v5](https://daisyui.com) + [HeroUI v3](https://heroui.com)
- [Better Auth](https://better-auth.com) — email/password + Google OAuth
- [MongoDB](https://mongodb.com) — user and session storage via `@better-auth/mongo-adapter`

## npm Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication (email + Google OAuth) |
| `@better-auth/mongo-adapter` | MongoDB adapter for Better Auth |
| `@heroui/react` + `@heroui/styles` | UI component library (modals, inputs, buttons) |
| `mongodb` | Database driver |
| `next` | Framework (App Router, SSR, API routes) |
| `react-fast-marquee` | Trending courses ticker |
| `react-hook-form` | Form state management (login & register) |
| `react-icons` | Icon library (MD, FA icon sets) |
| `react-spinners` | Loading spinner components |
| `sonner` | Toast notifications |
| `swiper` | Hero banner slider (autoplay, pagination, navigation) |
| `geist` | Vercel Geist font family |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component plugin (dropdown, badge, etc.) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
