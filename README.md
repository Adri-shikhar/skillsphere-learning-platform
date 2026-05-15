# SkillSphere

**Live demo:** [https://skillsphere-learning-platform.vercel.app/](https://skillsphere-learning-platform.vercel.app/)

SkillSphere is an online learning platform where users can browse courses, view details, and manage their profile. Built with Next.js, it features a responsive UI, course catalog with filtering, instructor highlights, and authentication powered by Better Auth and MongoDB.

## Features

- **Home** — Hero carousel, popular courses, top instructors, and learning tips
- **Courses** — Full catalog with search, category filters, and level filters
- **Course details** — Curriculum, descriptions, and enrollment info (protected route)
- **Profile** — User account management (protected route)
- **Auth** — Email/password registration and login; optional Google OAuth
- **Legal** — Terms & Conditions and Privacy Policy pages

## Tech stack

| Layer | Technologies |
|-------|----------------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | React 19, [HeroUI](https://www.heroui.com/), Tailwind CSS 4, DaisyUI, Framer Motion |
| Auth | [Better Auth](https://www.better-auth.com/) + MongoDB adapter |
| Data | Static course catalog (`public/data.json`) |
| Deploy | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- Node.js 18+
- MongoDB database (for authentication)

### Installation

```bash
git clone <your-repo-url>
cd skillsphere-learning-platform
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
BETTER_AUTH_URL=http://localhost:3000

# Optional — Google sign-in
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

For production, set `BETTER_AUTH_URL` to your deployed URL (e.g. `https://skillsphere-learning-platform.vercel.app`).

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── (main)/          # Home, Courses, Profile, CourseDetails, legal pages
│   ├── (auth)/          # Login, Registration
│   ├── api/auth/        # Better Auth API routes
│   └── Components/      # UI components (Navbar, Banner, catalog, etc.)
├── lib/
│   ├── auth.js          # Server-side Better Auth config
│   └── auth-client.js   # Client auth helpers
└── proxy.js             # Session guard for protected routes
public/
└── data.json            # Course catalog data
```

## Protected routes

Unauthenticated users are redirected to `/Login` when visiting:

- `/Profile`
- `/CourseDetails/[id]`

## License

Private project — all rights reserved unless otherwise specified.
