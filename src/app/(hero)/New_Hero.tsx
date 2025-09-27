import Link from 'next/link'

const skillGroups = [
        {
                title: 'Frontend',
                items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        },
        {
                title: 'Backend',
                items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
        },
        {
                title: 'DevOps',
                items: ['Docker', 'AWS', 'CI/CD Automation'],
        },
]

const highlights = [
        {
                title: 'Product-focused builds',
                description:
                        'I deliver end-to-end features with clean architecture, thoughtful UX, and the instrumentation teams need to iterate quickly.',
        },
        {
                title: 'Collaborative leadership',
                description:
                        'I thrive in cross-functional teams—coordinating with designers, product managers, and stakeholders to ship meaningful outcomes.',
        },
        {
                title: 'Mentorship & learning',
                description:
                        'From pairing sessions to technical writing, I love sharing knowledge and building a culture of continuous growth.',
        },
]

const featuredProjects = [
        {
                name: 'Reel Review',
                description:
                        'A cinematic discovery platform that combines social recommendations with personalized watchlists and analytics.',
                focus: 'Next.js · Server Components · Contentful',
        },
        {
                name: 'Palette.ai',
                description:
                        'Design system tooling that helps teams translate brand guidelines into reusable component libraries.',
                focus: 'TypeScript · Storybook · Design Tokens',
        },
        {
                name: 'FreightFlow',
                description:
                        'Workflow automation for logistics teams with real-time dashboards, alerts, and SLA tracking.',
                focus: 'Node.js · PostgreSQL · AWS',
        },
]

const contactMethods = [
        {
                label: 'Email',
                value: 'undermouse@gmail.com',
                href: 'mailto:undermouse@gmail.com',
        },
        {
                label: 'GitHub',
                value: 'github.com/undermouse',
                href: 'https://github.com/undermouse',
        },
        {
                label: 'LinkedIn',
                value: 'linkedin.com/in/undermouse',
                href: 'https://www.linkedin.com/in/undermouse',
        },
]

export default function New_Hero() {
        return (
                <main className='min-h-screen bg-slate-950 text-slate-100'>
                        <div className='mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:px-8 lg:py-28'>
                                <header className='grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
                                        <div className='space-y-6'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-slate-400'>
                                                        Portfolio refresh
                                                </p>
                                                <div>
                                                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
                                                                Zack Salama
                                                        </h1>
                                                        <p className='mt-2 text-xl font-medium text-slate-300 sm:text-2xl'>
                                                                Full-Stack Developer & Experience Engineer
                                                        </p>
                                                </div>
                                                <p className='max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg'>
                                                        I help teams craft performant, accessible web experiences—from the first wireframe to production-ready systems. My
                                                        sweet spot is bridging design and engineering to deliver interfaces that feel as good as they look.
                                                </p>
                                                <div className='flex flex-wrap gap-3'>
                                                        <Link
                                                                href='#projects'
                                                                className='rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300'
                                                        >
                                                                View featured work
                                                        </Link>
                                                        <a
                                                                href='#contact'
                                                                className='rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white'
                                                        >
                                                                Get in touch
                                                        </a>
                                                </div>
                                        </div>
                                        <aside className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-emerald-500/5'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300'>Snapshot</p>
                                                <ul className='space-y-4 text-sm text-slate-300'>
                                                        <li>
                                                                <span className='block font-semibold text-white'>Currently</span>
                                                                Building digital products and design systems for startups and creative studios.
                                                        </li>
                                                        <li>
                                                                <span className='block font-semibold text-white'>Focus</span>
                                                                Frontend architecture, API design, and developer experience.
                                                        </li>
                                                        <li>
                                                                <span className='block font-semibold text-white'>Location</span>
                                                                Toronto, Canada (remote-friendly)
                                                        </li>
                                                </ul>
                                        </aside>
                                </header>

                                <section className='space-y-12' aria-labelledby='skills-heading'>
                                        <div className='space-y-4'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300'>Core toolkit</p>
                                                <h2 id='skills-heading' className='text-3xl font-semibold text-white sm:text-4xl'>
                                                        Engineering stack
                                                </h2>
                                                <p className='max-w-2xl text-base text-slate-300 sm:text-lg'>
                                                        A blend of modern frameworks, typed tooling, and cloud infrastructure that keeps shipping fast and reliable.
                                                </p>
                                        </div>
                                        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                                                {skillGroups.map((group) => (
                                                        <div key={group.title} className='rounded-2xl border border-slate-800 bg-slate-900/40 p-6'>
                                                                <h3 className='text-lg font-semibold text-white'>{group.title}</h3>
                                                                <ul className='mt-3 space-y-2 text-sm text-slate-300'>
                                                                        {group.items.map((item) => (
                                                                                <li key={item} className='flex items-center gap-2'>
                                                                                        <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' aria-hidden />
                                                                                        {item}
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                ))}
                                        </div>
                                </section>

                                <section className='space-y-8' aria-labelledby='highlights-heading'>
                                        <div className='space-y-4'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300'>How I work</p>
                                                <h2 id='highlights-heading' className='text-3xl font-semibold text-white sm:text-4xl'>
                                                        Guiding principles
                                                </h2>
                                        </div>
                                        <div className='grid gap-6 lg:grid-cols-3'>
                                                {highlights.map((highlight) => (
                                                        <article key={highlight.title} className='flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6'>
                                                                <h3 className='text-xl font-semibold text-white'>{highlight.title}</h3>
                                                                <p className='text-sm leading-relaxed text-slate-300'>{highlight.description}</p>
                                                        </article>
                                                ))}
                                        </div>
                                </section>

                                <section className='space-y-10' id='projects' aria-labelledby='projects-heading'>
                                        <div className='space-y-4'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300'>Featured work</p>
                                                <h2 id='projects-heading' className='text-3xl font-semibold text-white sm:text-4xl'>
                                                        Projects that ship value
                                                </h2>
                                                <p className='max-w-2xl text-base text-slate-300 sm:text-lg'>
                                                        A sample of recent initiatives that highlight my experience leading product development from discovery through delivery.
                                                </p>
                                        </div>
                                        <div className='grid gap-6 lg:grid-cols-3'>
                                                {featuredProjects.map((project) => (
                                                        <article
                                                                key={project.name}
                                                                className='flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-emerald-500/5'
                                                        >
                                                                <h3 className='text-xl font-semibold text-white'>{project.name}</h3>
                                                                <p className='text-sm leading-relaxed text-slate-300'>{project.description}</p>
                                                                <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-300'>
                                                                        {project.focus}
                                                                </p>
                                                        </article>
                                                ))}
                                        </div>
                                </section>

                                <section className='space-y-10' aria-labelledby='contact-heading' id='contact'>
                                        <div className='space-y-4'>
                                                <p className='text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300'>Let’s build together</p>
                                                <h2 id='contact-heading' className='text-3xl font-semibold text-white sm:text-4xl'>
                                                        Contact
                                                </h2>
                                                <p className='max-w-2xl text-base text-slate-300 sm:text-lg'>
                                                        Ready to collaborate or chat about the next ambitious idea? Reach out through the channels below—I’ll respond within a day.
                                                </p>
                                        </div>
                                        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                                                {contactMethods.map((method) => (
                                                        <a
                                                                key={method.label}
                                                                href={method.href}
                                                                className='group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-emerald-400/70 hover:shadow-lg hover:shadow-emerald-500/10'
                                                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                                                rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                                                        >
                                                                <p className='text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300'>{method.label}</p>
                                                                <p className='mt-3 text-lg font-medium text-white group-hover:text-emerald-200'>{method.value}</p>
                                                        </a>
                                                ))}
                                        </div>
                                </section>
                        </div>
                </main>
        )
}
