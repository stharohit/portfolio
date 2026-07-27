"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ContactState = "idle" | "success" | "error";

type NavItem = {
  href: string;
  label: string;
};

type BentoCard = {
  title: string;
  description: string;
  spans: string;
  tone: "left" | "right";
};

type ServiceRole = {
  title: string;
  focus: string;
  stack: string;
};

type Project = {
  title: string;
  blurb: string;
  focus: string;
};

type Post = {
  title: string;
  excerpt: string;
};

const nav: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const bentoCards: BentoCard[] = [
  {
    title: "Full Stack Product Development",
    description:
      "I ship end-to-end web apps with reliable architecture, clean API contracts, and maintainable deployment practices.",
    spans: "col-span-2 row-span-2",
    tone: "left",
  },
  {
    title: "Website Buildouts",
    description:
      "Landing pages, portfolio sites, and marketing platforms tuned for speed, clarity, and conversion.",
    spans: "col-span-2 row-span-1",
    tone: "right",
  },
  {
    title: "AI-Assisted Workflows",
    description:
      "AI agent loops for research, drafts, QA checklists, and support automation where they reduce manual overhead.",
    spans: "col-span-1 row-span-1",
    tone: "left",
  },
  {
    title: "Backend Modernization",
    description:
      "Refactoring existing systems with stable API layers, stronger data validation, and pragmatic observability.",
    spans: "col-span-1 row-span-1",
    tone: "right",
  },
];

const serviceRoles: ServiceRole[] = [
  {
    title: "Freelance Product Builder",
    focus: "Greenfield startup launches and MVP development",
    stack: "Next.js, TypeScript, Prisma",
  },
  {
    title: "Legacy App Modernizer",
    focus: "Refactoring unstable features with fast, safe delivery",
    stack: "Node.js, React, PostgreSQL",
  },
  {
    title: "Interface & Workflow Repair",
    focus: "Usability fixes and maintainability for existing teams",
    stack: "Node.js, TRPC, Tailwind",
  },
];

const projects: Project[] = [
  {
    title: "Travel Product Suite Refresh",
    blurb:
      "A rebuilt experience with clearer booking flow, resilient state handling, and cleaner information architecture.",
    focus: "Next.js, Node.js, API contracts",
  },
  {
    title: "Operations Dashboard Upgrade",
    blurb:
      "Dashboard flows were simplified for agents, with robust components that reduced context switching and delivery friction.",
    focus: "TypeScript, React, TDD",
  },
  {
    title: "Service Team Client Portal",
    blurb:
      "Role-aware flows and clear status patterns were introduced to improve coordination and reduce handoff errors.",
    focus: "Node.js, Next.js, MongoDB",
  },
];

const marqueeWords = [
  "Reliable",
  "Fast",
  "Polished",
  "Maintainable",
  "Secure",
  "Scalable",
  "AI-Enabled",
  "Client-Led",
  "Remote-friendly",
];

const blogPosts: Post[] = [
  {
    title: "How I approach app modernization",
    excerpt:
      "I start with usage patterns, then remove bottlenecks before adding enhancements. This keeps every sprint predictable and keeps risk visible.",
  },
  {
    title: "Starting a greenfield project without chaos",
    excerpt:
      "I define contracts and release checkpoints early so teams stay aligned and decisions remain reversible when needed.",
  },
];

const aboutWords =
  "I shape dependable web products for teams that move quickly and need practical execution. From first architecture sketch to clean deployment handoff, I focus on clarity in code, communication in delivery, and outcomes that stay supportable in real teams.".split(
  " "
);

export default function Home() {
  const [isDark, setIsDark] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("portfolio-theme") === "dark"
  );
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [botCheck, setBotCheck] = useState("");
  const [status, setStatus] = useState<ContactState>("idle");

  const pageRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const projectsTitleRef = useRef<HTMLDivElement>(null);
  const projectsGalleryRef = useRef<HTMLDivElement>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setStackRef = (index: number) => (el: HTMLDivElement | null) => {
    stackRefs.current[index] = el;
  };

  const setMediaRef = (index: number) => (el: HTMLDivElement | null) => {
    mediaRefs.current[index] = el;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const words = aboutTextRef.current?.querySelectorAll<HTMLSpanElement>(
        "[data-reveal-word]"
      );
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.1, y: 12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            ease: "none",
            scrollTrigger: {
              trigger: aboutTextRef.current,
              start: "top 72%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }

      if (
        window.matchMedia("(min-width: 1024px)").matches &&
        projectsSectionRef.current &&
        projectsTitleRef.current &&
        projectsGalleryRef.current
      ) {
        gsap.to(projectsGalleryRef.current, {
          y: -Math.max(0, projects.length - 2) * 24,
          ease: "none",
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: "top 18%",
            end: "+=700",
            scrub: true,
            pin: projectsTitleRef.current,
          },
        });
      }

      if (window.matchMedia("(min-width: 1024px)").matches) {
        const stackedCards = stackRefs.current.filter(Boolean);
        stackedCards.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 0, rotate: 0 },
            {
              y: -index * 14,
              rotate: index % 2 === 0 ? -1.2 : 1.2,
              zIndex: 20 - index,
              scrollTrigger: {
                trigger: projectsSectionRef.current,
                start: "top 65%",
                end: "+=700",
                scrub: true,
              },
            }
          );
        });
      }

      mediaRefs.current.forEach((image) => {
        if (!image) return;
        gsap.fromTo(
          image,
          { scale: 0.8, opacity: 0.2, filter: "grayscale(100%) contrast(125%)" },
          {
            scale: 1,
            opacity: 0.95,
            filter: "grayscale(0%) contrast(110%)",
            scrollTrigger: {
              trigger: image,
              start: "top 88%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: pageRef }
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (botCheck.length > 0) {
      return;
    }

    const payload = `mailto:stha.rht028@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(`From: ${mail}\n\n${message}`)}`;
    window.location.href = payload;
    setStatus("success");
    setMail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen overflow-x-hidden w-full max-w-full bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.15),_transparent_48%),_radial-gradient(circle_at_78%_12%,_rgba(14,116,144,0.22),_transparent_35%),_linear-gradient(140deg,_rgba(236,254,255,0.25),_rgba(248,250,252,0.95))] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.5),_transparent_50%),_linear-gradient(140deg,_#020617,_#0f172a)] dark:text-slate-100"
    >
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-white/30 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(2,6,23,0.5)] backdrop-blur-xl transition hover:bg-cyan-500 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-200"
      >
        Contact Me
      </a>

      <header className="sticky top-4 z-40">
        <div className="mx-auto flex w-full max-w-6xl rounded-full border border-white/25 bg-white/55 px-5 py-3 backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-900/55">
          <p className="text-sm font-semibold tracking-wide text-cyan-700 dark:text-cyan-200 md:text-base">
            Rohit Man Shrestha
          </p>
          <nav className="mx-auto hidden gap-5 text-sm font-medium md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 transition hover:text-cyan-700 hover:ring-1 hover:ring-cyan-200 dark:hover:ring-slate-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="rounded-full border border-cyan-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50 md:text-sm dark:border-slate-600 dark:bg-slate-800/80 dark:text-cyan-100"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main className="w-full max-w-full overflow-x-hidden">
        <section
          id="hero"
          className="section-shell relative overflow-hidden px-6 py-32 md:py-40"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,47,73,0.9),rgba(8,145,178,0.36)_44%,rgba(15,23,42,0.76)),repeating-linear-gradient(135deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_22px)]" />
            <div className="absolute -left-24 top-0 h-[34rem] w-[34rem] rounded-full border border-cyan-100/20 bg-cyan-300/15 blur-3xl" />
            <div className="absolute bottom-[-16rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full border border-white/10 bg-slate-950/30 blur-3xl" />
          </div>

          <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center gap-8 text-center md:text-left">
            <p className="inline-flex w-fit rounded-full border border-cyan-300/70 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-600/90 dark:bg-slate-950/60 dark:text-cyan-200">
              Senior Software Developer
            </p>
            <h1 className="mx-auto max-w-6xl text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] font-semibold tracking-tight text-white md:mx-0 dark:text-cyan-50">
              I craft web experiences with
              <span
                className="mx-2 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle md:h-12 md:w-28"
                style={{ backgroundImage: "url(https://picsum.photos/seed/glass-chip/360/180)" }}
                aria-hidden="true"
              />
              modern engineering and practical delivery.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-100 md:mx-0 md:text-xl">
              Full stack web app and website development for teams building from scratch or
              improving what already exists.
            </p>
            <p className="text-lg font-medium text-cyan-100">
              I ship dependable results with visible progress and clean ownership.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="#contact"
                className="rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(8,145,178,0.45)] transition hover:bg-cyan-400"
              >
                Let&apos;s work together
              </Link>
              <a
                href="/ROHIT_CV_2025.pdf"
                className="rounded-full border border-white/40 bg-white/75 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/95"
                download
              >
                Download Portfolio
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell px-6 py-32">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/40 bg-white/60 p-8 shadow-2xl ring-1 ring-white/30 backdrop-blur-2xl md:grid-cols-[1.05fr_0.95fr] dark:border-slate-700/70 dark:bg-slate-900/45 dark:ring-slate-700/50">
            <div>
              <h2 className="mb-5 text-3xl font-semibold text-cyan-900 dark:text-cyan-100">About</h2>
              <p
                ref={aboutTextRef}
                className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:text-base"
              >
                {aboutWords.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    data-reveal-word
                    className="reveal-word inline-block"
                    style={{ opacity: 0.1 }}
                  >
                    {word} 
                  </span>
                ))}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:text-base">
                Story: Rohit began in problem-solving workflows where product quality depended on calm execution and practical engineering.
                Expertise: Next.js, Node.js, TypeScript, React, and AI agent workflows.
                Values: clear communication, maintainable code, honest timelines, and predictable quality.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">Experience</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Freelancer and web developer for startups and teams, leading feature delivery, refactors, and UI modernization.
                </p>
              </article>
              <article className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">Role Focus</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Product-ready development, full stack architecture, and pragmatic performance upgrades for web applications.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-7 text-4xl font-semibold text-cyan-900 dark:text-cyan-100">
              Services
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-slate-300">
              Core stack: Next.js, Node.js, TypeScript, React, AI Agents, plus TDD and API-first design.
            </p>

            <div className="mt-10 grid auto-rows-[200px] gap-4 md:grid-cols-4 md:grid-flow-dense">
              {bentoCards.map((card) => (
                <article
                  key={card.title}
                  className={`glass-panel group relative overflow-hidden ${card.spans} rounded-3xl border border-white/35 p-5 ring-1 ring-white/30`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.46),transparent_24%),radial-gradient(circle_at_82%_88%,rgba(14,116,144,0.56),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(8,145,178,0.56),rgba(15,23,42,0.9))]" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.14)_0_1px,transparent_1px_18px)]" />
                  </div>
                  <div className="relative flex h-full flex-col justify-end">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {card.tone === "left" ? "Execution" : "Delivery"}
                    </p>
                    <h3 className="mt-2 max-w-[22ch] text-2xl font-semibold leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-slate-100/90">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-3">
              {serviceRoles.map((service) => (
                <article
                  key={service.title}
                  className="glass-card group flex min-h-24 overflow-hidden rounded-2xl"
                >
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden bg-[radial-gradient(circle_at_24%_20%,rgba(103,232,249,0.8),transparent_13%),linear-gradient(125deg,#0f172a,#0e7490_52%,#a5f3fc)] transition-all duration-700 group-hover:w-60 md:h-auto md:w-44 md:group-hover:w-72">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.22)_0_1px,transparent_1px_16px)]" />
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 px-5 py-4">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-100">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{service.focus}</p>
                    </div>
                    <p className="hidden text-right text-sm text-slate-700 dark:text-slate-300 md:block">
                      {service.stack}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="marquee-wrapper mt-12 overflow-hidden rounded-2xl border border-white/30 bg-white/40 py-4 backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/55">
              <div className="marquee-track flex min-w-full items-center gap-10 whitespace-nowrap px-4 text-sm font-semibold tracking-wide text-cyan-800 dark:text-cyan-100">
                {[...marqueeWords, ...marqueeWords].map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="inline-flex items-center rounded-full border border-cyan-200/50 bg-white/60 px-4 py-2 transition hover:bg-cyan-100/80 dark:border-cyan-500/40 dark:bg-slate-900/50"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={projectsSectionRef}
          className="section-shell px-6 py-32"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[360px_1fr]">
            <div
              ref={projectsTitleRef}
              className="glass-card h-fit p-8 lg:sticky lg:top-36"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">
                Featured Projects
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-cyan-900 dark:text-cyan-100">
                Portfolio Highlights
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Three focused build examples that demonstrate modern full stack execution, measurable upgrades, and clear team ownership.
              </p>
              <Link
                href="#contact"
                className="mt-7 inline-flex rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Start a project
              </Link>
            </div>

            <div
              ref={projectsGalleryRef}
              className="space-y-6"
            >
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  ref={setStackRef(index)}
                  className="stack-card glass-card group overflow-hidden"
                >
                  <div className="grid gap-0 overflow-hidden md:grid-cols-[420px_1fr]">
                    <div
                      ref={setMediaRef(index)}
                      aria-hidden="true"
                      className="relative h-56 overflow-hidden bg-[radial-gradient(circle_at_74%_22%,rgba(165,243,252,0.78),transparent_14%),radial-gradient(circle_at_26%_80%,rgba(8,145,178,0.65),transparent_30%),linear-gradient(135deg,#082f49,#0e7490_52%,#cffafe)] transition-transform duration-700 group-hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0_1px,transparent_1px_20px)]" />
                      <div className="absolute bottom-7 left-7 h-16 w-40 rounded-xl border border-white/40 bg-slate-950/20 backdrop-blur-sm" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-semibold text-cyan-900 dark:text-cyan-100">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                        {project.blurb}
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                        {project.focus}
                      </p>
                      <button
                        type="button"
                        className="mt-5 inline-flex rounded-full border border-cyan-200 px-4 py-2 text-sm font-semibold text-cyan-700 transition group-hover:border-cyan-400 dark:border-slate-600 dark:text-cyan-200"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section-shell px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-4xl font-semibold text-cyan-900 dark:text-cyan-100">
              Blog / Insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.title} className="glass-card p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100">{post.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell px-6 py-32">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/30 bg-white/60 p-8 ring-1 ring-white/40 backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/50 dark:ring-slate-700/50">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-4xl font-semibold text-cyan-900 dark:text-cyan-100">
                  Let&apos;s Build Together
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Reach me directly for a brief discovery chat: clean architecture, predictable delivery, and practical project planning.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-slate-700 dark:text-slate-100">
                    Email: {" "}
                    <a href="mailto:stha.rht028@gmail.com" className="underline underline-offset-4">
                      stha.rht028@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-100">
                    LinkedIn: {" "}
                    <a href="https://www.linkedin.com/in/rohitshrestha" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                      linkedin.com/in/rohitshrestha
                    </a>
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-100">
                    GitHub: {" "}
                    <a href="https://github.com/stharohit" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                      github.com/stharohit
                    </a>
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    required
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Subject</span>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Project enquiry"
                    className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me what you want to build or improve"
                    className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                </label>
                <label className="sr-only" htmlFor="website-url">
                  Leave this field empty
                </label>
                <input
                  id="website-url"
                  value={botCheck}
                  onChange={(event) => setBotCheck(event.target.value)}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  tabIndex={-1}
                />
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                  Send via Email Client
                </button>
                {status === "success" && (
                  <p className="text-sm text-emerald-600 dark:text-emerald-300">
                    Message ready in your email client. If blocked, copy details and send manually.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please retry.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/30 py-10 dark:border-slate-700/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm md:flex-row md:items-center">
          <p>Rohit Man Shrestha · Senior Software Developer</p>
          <div className="flex items-center gap-5 text-cyan-700 dark:text-cyan-200">
            <a href="https://www.linkedin.com/in/rohitshrestha" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/stharohit" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/ROHIT_CV_2025.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
