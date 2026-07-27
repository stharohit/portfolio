"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    number: "01",
    title: "Travel Product Suite Refresh",
    category: "Product rebuild",
    summary:
      "A clearer booking experience built around resilient state handling and calmer information architecture.",
    stack: ["Next.js", "Node.js", "API contracts"],
    visual: "project-visual--orbit",
  },
  {
    number: "02",
    title: "Operations Dashboard Upgrade",
    category: "Workflow repair",
    summary:
      "A focused operations surface that makes high-volume work easier to scan, act on, and hand off.",
    stack: ["TypeScript", "React", "TDD"],
    visual: "project-visual--grid",
  },
  {
    number: "03",
    title: "Service Team Client Portal",
    category: "Role-aware platform",
    summary:
      "Clear status patterns and role-aware flows for teams coordinating across a shared client workspace.",
    stack: ["Node.js", "Next.js", "MongoDB"],
    visual: "project-visual--signal",
  },
];

const services = [
  [
    "Product development",
    "End-to-end products, platforms, and web apps with clean architecture, dependable APIs, and a delivery rhythm your team can follow.",
  ],
  [
    "System repair",
    "Practical refactors for slow, fragile, or difficult-to-change products without unnecessary rewrites.",
  ],
  [
    "AI workflows",
    "Useful AI-assisted systems for research, drafting, QA, and internal operations where they reduce real work.",
  ],
  [
    "Integration & APIs",
    "Reliable connections between the services, data, and workflows your product depends on.",
  ],
];

const principles = ["Reliable", "Clear", "Maintainable", "Client-led"];

const technologies = [
  { name: "Next.js", icon: "nextdotjs", lightIcon: "nextdotjs-light", role: "Framework" },
  { name: "React", icon: "react", role: "UI library" },
  { name: "TypeScript", icon: "typescript", role: "Language" },
  { name: "Node.js", icon: "nodedotjs", role: "Runtime" },
  { name: "tRPC", icon: "trpc", role: "Typed APIs" },
  { name: "MongoDB", icon: "mongodb", role: "Data layer" },
  { name: "Tailwind CSS", icon: "tailwindcss", role: "Interface system" },
  { name: "Jest", icon: "jest", role: "Testing" },
  { name: "Vercel", icon: "vercel", lightIcon: "vercel-light", role: "Delivery" },
  { name: "AI Agents", icon: "ai-agents", role: "Practical automation" },
];

const notes = [
  {
    date: "Working note 01",
    title: "Modernization starts with the work people actually do.",
    text: "Before changing code, I map the decisions, bottlenecks, and risky handoffs that shape everyday use.",
  },
  {
    date: "Working note 02",
    title: "Good software stays legible after launch.",
    text: "Architecture, naming, and release practices should make change less of a treasure hunt.",
  },
];

function PrincipleIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="M32 7 52 15v15c0 13-8.2 22-20 27C20.2 52 12 43 12 30V15L32 7Z" fill="#2563EB" /><path d="m22 31 7 7 14-15" stroke="#A7F3D0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="M7 32s9-16 25-16 25 16 25 16-9 16-25 16S7 32 7 32Z" fill="#F59E0B" /><circle cx="32" cy="32" r="9" fill="#0E7490" /><circle cx="32" cy="32" r="4" fill="#FDE68A" /></svg>;
  }
  if (index === 2) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="m12 23 20-11 20 11-20 11-20-11Z" fill="#F97316" /><path d="m12 32 20 11 20-11" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><path d="m12 42 20 11 20-11" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  return <svg viewBox="0 0 64 64" fill="none"><path d="M10 13h27v20H23L14 42V33h-4V13Z" fill="#EC4899" /><path d="M54 27H27v18h14l9 9v-9h4V27Z" fill="#14B8A6" /><circle cx="23" cy="23" r="3" fill="white" /><circle cx="32" cy="23" r="3" fill="white" /><circle cx="41" cy="23" r="3" fill="white" /></svg>;
}

function ServiceIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="m32 7 22 12-22 12L10 19 32 7Z" fill="#2563EB" /><path d="m10 29 22 12 22-12" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><path d="m10 40 22 12 22-12" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="M54 15a16 16 0 0 0-19 20L16 54 9 47l19-19a16 16 0 0 0 20-19l-9 9-7-2-2-7 9-9Z" fill="#F97316" /><circle cx="16" cy="48" r="4" fill="#FDE68A" /></svg>;
  }
  if (index === 2) {
    return <svg viewBox="0 0 64 64" fill="none"><path d="M18 32h28M22 21l10 11-10 11M42 21 32 32l10 11" stroke="#8B5CF6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="13" cy="32" r="7" fill="#EC4899" /><circle cx="51" cy="32" r="7" fill="#14B8A6" /><circle cx="32" cy="10" r="6" fill="#FBBF24" /></svg>;
  }
  return <svg viewBox="0 0 64 64" fill="none"><path d="M25 23h-7a9 9 0 0 0 0 18h7M39 23h7a9 9 0 0 1 0 18h-7" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" /><path d="M24 32h16" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" /><circle cx="32" cy="32" r="5" fill="#FBBF24" /></svg>;
}

function ThemeGlyph({ isLight }: { isLight: boolean }) {
  return isLight ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.7 14.5A8.5 8.5 0 0 1 9.5 3.3 8.5 8.5 0 1 0 20.7 14.5Z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2.2M12 19.8V22M22 12h-2.2M4.2 12H2M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6M19.1 19.1l-1.6-1.6M6.5 6.5 4.9 4.9" />
    </svg>
  );
}

export default function Home() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return;

    const body = `From: ${email}\n\n${message}`;
    window.location.href = `mailto:stha.rht028@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Rohit Man Shrestha home">
          <Image src={isLight ? "/brand/rm-mark.svg" : "/brand/rm-mark-dark.svg"} alt="" width={32} height={32} priority />
          <span>
            Rohit Man Shrestha
            <small>Senior Software Developer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            onClick={() => setIsLight((value) => !value)}
          >
            <ThemeGlyph isLight={isLight} />
            <span className="sr-only">Switch theme</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">{isMenuOpen ? "Close" : "Open"} menu</span>
          </button>
        </div>

      </header>

      <nav className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
        <a className="mobile-nav-brand" href="#top" aria-label="Rohit Man Shrestha home" onClick={closeMenu}>
          <Image src={isLight ? "/brand/rm-mark.svg" : "/brand/rm-mark-dark.svg"} alt="" width={38} height={38} />
          <span>Rohit Man Shrestha<small>Senior Software Developer</small></span>
        </a>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <div className="mobile-menu-tools">
          <span>Appearance</span>
          <button
            className="mobile-theme-toggle"
            type="button"
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            onClick={() => setIsLight((value) => !value)}
          >
            <ThemeGlyph isLight={isLight} />
            {isLight ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </nav>
      <button className={`mobile-menu-backdrop ${isMenuOpen ? "mobile-menu-backdrop--open" : ""}`} type="button" aria-label="Close menu" onClick={closeMenu} />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-art"
            src="/images/orbital-signal-hero-light.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-scrim" />
          <div className="site-grid hero-grid" aria-hidden="true" />
          <div className="content hero-content">
            <p className="eyebrow"><span /> Available for select projects</p>
            <h1 id="hero-title">
              <span>I turn tangled</span>
              <em>problems into</em>
              <span>useful software.</span>
            </h1>
            <p className="hero-copy">
              I build products, platforms, and internal tools from scratch—and give existing software a clearer path forward.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="#contact">
                Let&apos;s work together <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link" href="/ROHIT_CV_2025.pdf" download>
                Download portfolio <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className="hero-facts">
              <div><dt>Focus</dt><dd>Products, platforms & tools</dd></div>
              <div><dt>Stack</dt><dd>Next.js · Node.js · TypeScript</dd></div>
            </dl>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="content">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Selected work</p>
                <h2 id="work-title">Problems, untangled.<br /><em>Systems, shipped.</em></h2>
              </div>
              <p>Three examples of the systems I help teams shape, repair, and put to work.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual ${project.visual}`} aria-hidden="true">
                    <span className="project-orbit project-orbit--one" />
                    <span className="project-orbit project-orbit--two" />
                    <span className="project-orbit project-orbit--three" />
                    <span className="project-node project-node--one" />
                    <span className="project-node project-node--two" />
                  </div>
                  <div className="project-copy">
                    <p className="project-category">{project.number} / {project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="stack-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <a className="project-link" href="#contact" aria-label={`Discuss ${project.title}`}>↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="content services-layout">
            <div className="services-intro">
              <p className="eyebrow">03 / Services</p>
              <h2 id="services-title">From concept to <em>reliable software.</em></h2>
              <p>I take responsibility for the work between a rough idea and software that earns its place.</p>
            </div>
            <ol className="service-list">
              {services.map(([title, description], index) => (
                <li key={title}>
                  <span className="service-icon" aria-hidden="true"><ServiceIcon index={index} /></span>
                  <div><p>0{index + 1}</p><h3>{title}</h3><span>{description}</span></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div className="content stack-layout">
            <div className="stack-intro">
              <p className="eyebrow">04 / Modern stack</p>
              <h2 id="stack-title">Modern tools. <em>Thoughtful choices.</em></h2>
              <p>
                A focused toolkit for moving quickly without leaving a future teammate a mystery novel.
              </p>
            </div>
            <ul className="technology-grid" aria-label="Technology stack">
              {technologies.map((technology) => (
                <li key={technology.name}>
                  <span className="technology-mark"><Image src={`/stack/${isLight ? technology.lightIcon ?? technology.icon : technology.icon}.svg`} alt="" width={34} height={34} /></span>
                  <strong>{technology.name}</strong>
                  <span>{technology.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="content">
            <p className="eyebrow">05 / Delivery values</p>
            <h2 id="principles-title">How I build and <em>deliver.</em></h2>
            <div className="principle-grid">
              {principles.map((principle, index) => (
                <article key={principle}>
                  <span className="principle-icon" aria-hidden="true"><PrincipleIcon index={index} /></span>
                  <p>0{index + 1}</p>
                  <h3>{principle}</h3>
                  <span>{["Solid foundations before speed.", "Visible trade-offs, plain language.", "Built for the next change.", "Progress you can actually see."][index]}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section" id="about" aria-labelledby="about-title">
          <div className="content statement-layout">
            <div>
              <p className="eyebrow">06 / About</p>
              <h2 id="about-title">Good engineering leaves <em>fewer riddles.</em></h2>
            </div>
            <div className="statement-copy">
              <p>I work with teams that want thoughtful execution without the drama: a clear plan, steady communication, and code that still makes sense after launch.</p>
              <p>My work sits where product judgment meets software delivery: interfaces people can use, systems teams can maintain, and practical AI workflows when they earn their place.</p>
            </div>
          </div>
        </section>

        <section className="notes-section" id="notes" aria-labelledby="notes-title">
          <div className="content">
            <div className="section-heading section-heading--compact">
              <div><p className="eyebrow">07 / Field notes</p><h2 id="notes-title">Useful ideas, plainly written.</h2></div>
              <a className="text-link" href="#contact">Ask about a project <span aria-hidden="true">↗</span></a>
            </div>
            <div className="note-grid">
              {notes.map((note) => (
                <article key={note.date}>
                  <p>{note.date}</p><h3>{note.title}</h3><span>{note.text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="content contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">08 / Let&apos;s connect</p>
              <h2 id="contact-title">Let&apos;s build something <em>meaningful.</em></h2>
              <p>Tell me what you&apos;re trying to improve or bring to life. I&apos;ll reply with a useful next move.</p>
              <ul>
                <li><a href="mailto:stha.rht028@gmail.com">stha.rht028@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/rohitshrestha" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/stharohit" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /></label>
                <label>Subject<input required value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="What can I help with?" /></label>
              </div>
              <label>Message<textarea required rows={6} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A little context: what are you building, changing, or trying to solve?" /></label>
              <label className="honeypot" htmlFor="company-site">Company site</label>
              <input id="company-site" className="honeypot" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
              <button className="button button--primary" type="submit">Start a conversation <span aria-hidden="true">↗</span></button>
              {submitted && <p className="form-success" role="status">Your email client is ready. If it did not open, email me directly.</p>}
            </form>
          </div>
        </section>
      </main>

      <a className="floating-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
      <footer className="site-footer">
        <div className="content footer-content">
          <div className="footer-brand"><Image src={isLight ? "/brand/rm-mark.svg" : "/brand/rm-mark-dark.svg"} alt="" width={26} height={26} /><span>Rohit Man Shrestha</span></div>
          <span>Built with focus. Shipped with care.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
