"use client"

import Link from "next/link"

const expertise = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS",
]

const highlightProjects = [
  {
    title: "Cinematic Scribe",
    summary:
      "An AI-assisted screenplay collaborator that helps writers explore alternate plot lines with natural language prompts and scene visualisations.",
    stack: ["Next.js", "OpenAI", "Supabase"],
    href: "#portfolio",
  },
  {
    title: "Sonic Cartographer",
    summary:
      "Generative music discovery maps that react to user behaviour, built on top of Spotify's graph APIs and edge rendering.",
    stack: ["Next.js", "D3", "Vercel Edge"],
    href: "#portfolio",
  },
  {
    title: "Mission Control",
    summary:
      "Realtime DevOps dashboards for distributed teams with fine-grained role based access and blazing fast DX.",
    stack: ["tRPC", "Prisma", "AWS"],
    href: "#portfolio",
  },
]

const personalNotes = [
  {
    title: "Crafting immersive developer experiences",
    description:
      "Obsessed with making tooling delightful, whether it is scaffolding monorepos, designing component systems, or automating the boring bits.",
  },
  {
    title: "Human-first problem solving",
    description:
      "Great software starts with empathy. I work closely with stakeholders to design workflows that feel tailored rather than forced.",
  },
  {
    title: "Systems thinking",
    description:
      "From database design to pixel-perfect details, I zoom in and out to keep projects resilient, maintainable, and scalable.",
  },
]

type HeroProps = {
  blog?: unknown
}

export default function NewHero(_: HeroProps) {
  return (
    <main className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-gradient-to-b from-emerald-500/20 via-slate-950 to-slate-950 blur-3xl" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-28 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-emerald-300">
              Zack Salama · Full-Stack Developer
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              I engineer thoughtful digital products that balance aesthetics, performance, and business impact.
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              From greenfield builds to scaling established platforms, I bring a love for experimentation, clean architecture, and the craft of storytelling through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:undermouse@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:scale-[1.02] hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Let&apos;s collaborate
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                View my work
              </Link>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-500/10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Current focus</h2>
                <p className="mt-3 text-sm text-slate-300">
                  Building next-gen dashboards and developer tooling with a keen eye on accessibility, design systems, and measurable outcomes.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <dt className="text-slate-400">Based in</dt>
                  <dd className="text-lg font-semibold text-white">Toronto, CA</dd>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <dt className="text-slate-400">Available for</dt>
                  <dd className="text-lg font-semibold text-white">Lead roles · Freelance</dd>
                </div>
                <div className="col-span-2 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <dt className="text-slate-400">Interests</dt>
                  <dd className="text-lg font-semibold text-white">
                    Design systems · DX tooling · Creative coding
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section aria-labelledby="expertise" className="space-y-10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 id="expertise" className="text-3xl font-semibold text-white">
                Technical Superpowers
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-300">
                Years in product engineering have equipped me with a stack that moves fast without breaking the craft. These are the tools I reach for when solving complex problems.
              </p>
            </div>
            <span className="hidden rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200 lg:inline-flex">
              10+ Years Experimenting
            </span>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {expertise.map((item) => (
              <li
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-5 text-center text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/20 opacity-0 transition group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </section>

        <section id="portfolio" aria-labelledby="portfolio-heading" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="portfolio-heading" className="text-3xl font-semibold text-white">
                Featured Explorations
              </h2>
              <p className="mt-2 text-base text-slate-300">
                A rotating gallery of experiments that blend narrative, data, and interactivity. Each project pushes the boundaries of what modern web apps can feel like.
              </p>
            </div>
            <Link
              href="mailto:undermouse@gmail.com"
              className="rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Request a private demo
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlightProjects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-emerald-400/60"
              >
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    {project.stack.join(" · ")}
                  </p>
                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-emerald-200">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
                </div>
                <Link
                  href={project.href}
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition group-hover:gap-3"
                >
                  Explore the build
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="pointer-events-none absolute inset-x-8 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="philosophy" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 id="philosophy" className="text-3xl font-semibold text-white">
              Philosophy in motion
            </h2>
            <p className="text-base text-slate-300">
              Building products is more than shipping features. It means designing moments of delight, ensuring reliability, and helping teams move with confidence.
            </p>
          </div>
          <dl className="grid gap-6 md:grid-cols-3">
            {personalNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40"
              >
                <dt className="text-lg font-semibold text-white">{note.title}</dt>
                <dd className="mt-3 text-sm text-slate-300">{note.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="connect" className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl shadow-emerald-500/10">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <h2 id="connect" className="text-3xl font-semibold text-white">
                Let&apos;s build the future together
              </h2>
              <p className="text-base text-slate-300">
                I partner with teams that value experimentation, design, and reliability. If you have an ambitious roadmap, I&apos;d love to explore how we can accelerate it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:undermouse@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:scale-[1.02] hover:bg-emerald-300"
                >
                  Start a conversation
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zacksalama"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              <p className="text-sm uppercase tracking-widest text-emerald-300">What collaborators say</p>
              <blockquote className="mt-4 text-base text-slate-200">
                “Zack transformed our product direction with thoughtful experimentation and rock-solid engineering. Every project became a story worth sharing.”
              </blockquote>
              <p className="mt-4 text-xs text-slate-400">— Creative Director, Immersive Labs</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
