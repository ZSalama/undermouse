import Link from 'next/link'

const skillGroups = [
	{
		title: 'Frontend',
		items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
	},
	{
		title: 'Backend',
		items: ['Node.js', 'Prisma', 'Convex', 'Vite'],
	},
	{
		title: 'DevOps',
		items: ['Docker', 'Vercel', 'AWS', 'GitHub Actions'],
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
		title: 'Learning',
		description:
			'From pairing sessions to technical writing, I love sharing and gaining knowledge while building culture of continuous growth.',
	},
]

const featuredProjects = [
	{
		name: 'PromptBucket',
		description:
			'A platform for to help organize, plan, and optimize AI prompts.',
		focus: 'Next.js · React · Convex · OpenAI',
	},
	{
		name: 'MS_tracker',
		description:
			"A tool to help users track their character's progression in the game MapleStory. Includes image recognition to automatically log stats from screenshots.",
		focus: 'TypeScript · UploadThing · Prisma · Vercel',
	},
	{
		name: 'Art Gallery',
		description:
			'E-commerce site for an art gallery, featuring a custom admin dashboard for managing inventory and orders.',
		focus: 'PayloadCMS · CSS · HTML · Stripe',
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
		value: 'github.com/ZSalama',
		href: 'https://github.com/ZSalama',
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/zsalama',
		href: 'https://www.linkedin.com/in/zsalama',
	},
]

export default function New_Hero() {
	return (
		<main className='relative min-h-screen overflow-hidden bg-[#050505] text-[#E6F1FF]'>
			<div className='pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_15%_-10%,rgba(100,255,218,0.18),transparent_55%),radial-gradient(circle_at_85%_0,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_50%_110%,rgba(100,255,218,0.12),transparent_40%)]' />
			<div className='pointer-events-none absolute inset-0 -z-20 opacity-[0.065] [background-image:linear-gradient(0deg,transparent_90%,rgba(100,255,218,0.9)95%),linear-gradient(90deg,transparent_90%,rgba(100,255,218,0.6)95%)]' />
			<div className='mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:px-8 lg:py-28'>
				<header className='grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
					<div className='space-y-6'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA]/80 font-mono'>
							Hi, my name is
						</p>
						<div>
							<h1 className='text-4xl font-bold tracking-tight text-[#E6F1FF] sm:text-5xl lg:text-6xl'>
								Zack Salama
							</h1>
							<p className='mt-2 text-xl font-medium text-[#9BA4C4] sm:text-2xl'>
								Full-Stack Developer
							</p>
						</div>
						<p className='max-w-2xl text-base leading-relaxed text-[#9BA4C4] sm:text-lg'>
							I help teams craft performant, accessible web experiences—from the
							first wireframe to production-ready systems. My sweet spot is
							bridging design and engineering to deliver interfaces that feel as
							good as they look.
						</p>
						<div className='flex flex-wrap gap-3'>
							<Link
								href='#projects'
								className='rounded-full bg-[linear-gradient(120deg,#64FFDA_0%,#00FFFF_50%,#64FFDA_100%)] px-6 py-3 text-sm font-semibold text-[#081016] shadow-[0_0_25px_rgba(100,255,218,0.35)] transition hover:shadow-[0_0_35px_rgba(100,255,218,0.55)] hover:saturate-150'
							>
								View featured work
							</Link>
							<a
								href='#contact'
								className='rounded-full border border-[#1F2F3D] px-6 py-3 text-sm font-semibold text-[#E6F1FF] transition hover:border-[#64FFDA] hover:text-[#64FFDA] hover:shadow-[0_0_18px_rgba(100,255,218,0.45)]'
							>
								Get in touch
							</a>
						</div>
					</div>
					<aside className='space-y-6 rounded-3xl border border-[#162032] bg-[#0B1625]/80 p-8 shadow-[0_0_40px_rgba(17,24,39,0.45)] backdrop-blur-md'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
							Snapshot
						</p>
						<ul className='space-y-4 text-sm text-[#9BA4C4]'>
							<li>
								<span className='block font-semibold text-[#E6F1FF]'>
									Currently
								</span>
								Building digital products and design systems for startups and
								creative studios.
							</li>
							<li>
								<span className='block font-semibold text-[#E6F1FF]'>
									Focus
								</span>
								Frontend architecture, API design, and developer experience.
							</li>
							<li>
								<span className='block font-semibold text-[#E6F1FF]'>
									Location
								</span>
								Palo Alto, CA (remote-friendly)
							</li>
						</ul>
					</aside>
				</header>

				<section className='space-y-12' aria-labelledby='skills-heading'>
					<div className='space-y-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
							Core toolkit
						</p>
						<h2
							id='skills-heading'
							className='text-3xl font-semibold text-[#E6F1FF] sm:text-4xl'
						>
							Engineering stack
						</h2>
						<p className='max-w-2xl text-base text-[#9BA4C4] sm:text-lg'>
							A blend of modern frameworks, typed tooling, and cloud
							infrastructure that keeps shipping fast and reliable.
						</p>
					</div>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{skillGroups.map((group) => (
							<div
								key={group.title}
								className='rounded-2xl border border-[#1A2538] bg-[#0A1422]/80 p-6 shadow-[0_12px_35px_rgba(5,10,20,0.55)] backdrop-blur-md'
							>
								<h3 className='text-lg font-semibold text-[#E6F1FF]'>
									{group.title}
								</h3>
								<ul className='mt-3 space-y-2 text-sm text-[#9BA4C4]'>
									{group.items.map((item) => (
										<li key={item} className='flex items-center gap-2'>
											<span
												className='h-1.5 w-1.5 rounded-full bg-[#64FFDA] shadow-[0_0_8px_rgba(100,255,218,0.8)]'
												aria-hidden
											/>
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
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
							How I work
						</p>
						<h2
							id='highlights-heading'
							className='text-3xl font-semibold text-[#E6F1FF] sm:text-4xl'
						>
							Guiding principles
						</h2>
					</div>
					<div className='grid gap-6 lg:grid-cols-3'>
						{highlights.map((highlight) => (
							<article
								key={highlight.title}
								className='flex flex-col gap-4 rounded-2xl border border-[#1A2538] bg-[#0A1422]/85 p-6 shadow-[0_14px_40px_rgba(4,10,20,0.6)] backdrop-blur-md'
							>
								<h3 className='text-xl font-semibold text-[#E6F1FF]'>
									{highlight.title}
								</h3>
								<p className='text-sm leading-relaxed text-[#9BA4C4]'>
									{highlight.description}
								</p>
							</article>
						))}
					</div>
				</section>

				<section
					className='space-y-10'
					id='projects'
					aria-labelledby='projects-heading'
				>
					<div className='space-y-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
							Featured work
						</p>
						<h2
							id='projects-heading'
							className='text-3xl font-semibold text-[#E6F1FF] sm:text-4xl'
						>
							Projects that stand out
						</h2>
						<p className='max-w-2xl text-base text-[#9BA4C4] sm:text-lg'>
							A sample of recent initiatives that highlight my experience with
							product development from discovery through delivery.
						</p>
					</div>
					<div className='grid gap-6 lg:grid-cols-3'>
						{featuredProjects.map((project) => (
							<article
								key={project.name}
								className='flex flex-col gap-4 rounded-2xl border border-[#1C2B40] bg-[#08111F]/85 p-6 shadow-[0_18px_45px_rgba(4,10,20,0.65)] backdrop-blur-md'
							>
								<h3 className='text-xl font-semibold text-[#E6F1FF]'>
									{project.name}
								</h3>
								<p className='text-sm leading-relaxed text-[#9BA4C4]'>
									{project.description}
								</p>
								<p className='text-xs font-medium uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
									{project.focus}
								</p>
							</article>
						))}
					</div>
				</section>

				<section
					className='space-y-10'
					aria-labelledby='contact-heading'
					id='contact'
				>
					<div className='space-y-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
							Let&apos;s build together
						</p>
						<h2
							id='contact-heading'
							className='text-3xl font-semibold text-[#E6F1FF] sm:text-4xl'
						>
							Contact
						</h2>
						<p className='max-w-2xl text-base text-[#9BA4C4] sm:text-lg'>
							Ready to collaborate or chat about the next ambitious idea? Reach
							out through the channels below—I&apos;ll respond within a day.
						</p>
					</div>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{contactMethods.map((method) => (
							<a
								key={method.label}
								href={method.href}
								className='group rounded-2xl border border-[#1A2538] bg-[#091321]/85 p-6 transition hover:border-[#64FFDA] hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] backdrop-blur-md'
								target={method.href.startsWith('http') ? '_blank' : undefined}
								rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
							>
								<p className='text-xs font-semibold uppercase tracking-[0.35em] text-[#64FFDA] font-mono'>
									{method.label}
								</p>
								<p className='mt-3 text-lg font-medium text-[#E6F1FF] group-hover:text-[#64FFDA]'>
									{method.value}
								</p>
							</a>
						))}
					</div>
				</section>
			</div>
		</main>
	)
}
