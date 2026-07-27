# Portfolio Project Context

This file reflects the current portfolio implementation state as of 2026-07-28.

You are building a **single-page freelance portfolio website** for:

- **Name:** Rohit Man Shrestha
- **Role:** Senior Software Developer

## Goal

Create a premium portfolio that clearly communicates Rohit’s capability for freelance web development and helps potential clients contact him for projects.

## Core Objective

- Primary business goal: **client acquisition**.
- Secondary: **show portfolio information** in a clean, professional format.

## Audience

Anyone who wants to:

- fix/improve an existing app, or
- build a web app/website from scratch.

## Brand & Voice

- Tone: **confident**, with a **light personality**.
- Style: **premium**, **cool-tone teal** palette.
- Theme: include **light + dark mode**.
- Motion: **moderate animations** only.
- Visual language: avoid stock photos; use **custom illustrations/placeholders or icon-based visuals**.

## Content & Sections (One-page with smooth scrolling)

Baseline requirement order:

1. Hero
2. About
3. Services
4. Featured Projects (3 placeholders for now)
5. Blog/Insights (simple starter section with placeholders)
6. Contact
7. Footer

Current implementation order in `app/page.tsx`:

1. Hero
2. Work (Featured projects block with 3 cards)
3. Services
4. Stack (technology showcase)
5. Principles
6. About
7. Notes (Blog/Insights placeholder section)
8. Contact
9. Footer

## Must-have features

- Sticky contact button visible across page.
- Hero CTA button: **“Let’s work together”**.
- Also include **portfolio download** as a main action.
- Contact options shown: **email, LinkedIn, GitHub, and form**.
- Public contact details:
   - Email: `stha.rht028@gmail.com`
   - Do **not** show personal phone number.
- Footer should include LinkedIn and GitHub links.
- Contact form must include fields:
   - email
   - subject
   - content/message
- Contact form must use anti-spam protection (honeypot and/or captcha pattern).
- Allow resume/CV download.

Current implementation status:

- Hero CTA is present exactly as required with label **“Let’s work together”**.
- Portfolio/CV download action is present via `/ROHIT_CV_2025.pdf` as “Download portfolio”.
- Sticky floating contact button is implemented.
- Contact details include email, LinkedIn, GitHub, and an inline form.
- Form fields include email, subject, and message, with honeypot anti-spam.
- Footer currently has branding/back-to-top and can be extended to include social links explicitly.

## Content scope

- About should cover: **story, expertise, values**.
- Experience and roles should be shown in **simplified recruiter-friendly format** (not full CV verbatim).
- Keep project metadata minimal now:
   - 3 projects
   - no testimonial section
   - no certifications
   - no leadership/soft skills sections
   - no metrics blocks
   - no case-study sub-format
   - no performance marketing claims in content
- Include service statement:
   - full stack web app and website development

## Skills shown prominently

Must include:

- Next.js
- Node.js
- TypeScript
- React
- AI Agents
 Also include 1–2 complementary skills (choose best fit, e.g., TRPC, Tailwind, MongoDB, TDD).

Current implementation already includes all required skills plus:

- Next.js, React, TypeScript, Node.js, AI Agents
- Additional stack shown: tRPC, MongoDB, Tailwind CSS, Jest, Vercel

## Technical requirements

- Build with **Next.js + TypeScript + Tailwind CSS**.
- One-page responsive and mobile-first.
- Smooth section scrolling.
- Include a lightweight dark mode toggle.
- Add minimal accessible defaults (keyboard/focus states, semantic labels).
- Implement with reusable components and clean layout.

Current implementation status:

- Uses App Router with `app/page.tsx` and `app/layout.tsx`.
- Tailwind import plus custom CSS variables in `app/globals.css`.
- Light/dark toggle via `html.light` class is wired.
- Smooth scrolling and reduced-motion fallback are present.
- Focus-visible and accessible labels are implemented for key controls.
- Current structure is monolithic in `app/page.tsx` with reusable helper components for icon sections and data-driven arrays; future refactor into dedicated components is optional.

## Deployment

- Prepare for deployment on **Vercel**.
- Domain target for future config: **rohit.info.np**.
- Do not add SEO/meta hardening unless asked later.
- Do not add analytics by default.
- Do not include legal terms/disclaimers unless requested.
- Keep date constraints out (no launch date in content).

## Extra preferences

- Use placeholders for logo/profile media for now.
- Keep CTA hierarchy clear and direct:
   1. hire/contact CTA
   2. portfolio download
- Avoid stock imagery.

## Autonomy instructions

- Prefer self-sufficiency and complete tasks without repeated manual steps.
- If uncertain, choose the safest, minimal default and keep the design premium and practical.
