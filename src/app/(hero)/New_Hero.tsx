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
		<main className='min-h-screen bg-[#FAFAFA] text-[#212121]'>
			<div className='mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:px-8 lg:py-28'>
				<header className='grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
					<div className='space-y-6'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#6F6F6F]'>
							Hi, my name is
						</p>
						<div>
							<h1 className='text-4xl font-bold tracking-tight text-[#101010] sm:text-5xl lg:text-6xl'>
								Zack Salama
							</h1>
							<p className='mt-2 text-xl font-medium text-[#2F2F2F] sm:text-2xl'>
								Full-Stack Developer
							</p>
						</div>
						<p className='max-w-2xl text-base leading-relaxed text-[#3D3D3D] sm:text-lg'>
							I help teams craft performant, accessible web experiences—from the
							first wireframe to production-ready systems. My sweet spot is
							bridging design and engineering to deliver interfaces that feel as
							good as they look.
						</p>
						<div className='flex flex-wrap gap-3'>
							<Link
								href='#projects'
								className='rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6D28D9]'
							>
								View featured work
							</Link>
							<a
								href='#contact'
								className='rounded-full border border-[#2F2F2F] px-6 py-3 text-sm font-semibold text-[#212121] transition hover:border-[#7C3AED] hover:text-[#7C3AED]'
							>
								Get in touch
							</a>
						</div>
					</div>
					<aside className='space-y-6 rounded-3xl border border-[#E5E5E5] bg-white p-8 shadow-xl shadow-black/5'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
							Snapshot
						</p>
						<ul className='space-y-4 text-sm text-[#3A3A3A]'>
							<li>
								<span className='block font-semibold text-[#121212]'>
									Currently
								</span>
								Building digital products and design systems for startups and
								creative studios.
							</li>
							<li>
								<span className='block font-semibold text-[#121212]'>Focus</span>
								Frontend architecture, API design, and developer experience.
							</li>
							<li>
								<span className='block font-semibold text-[#121212]'>Location</span>
								Palo Alto, CA (remote-friendly)
							</li>
						</ul>
					</aside>
				</header>

				<section className='space-y-12' aria-labelledby='skills-heading'>
					<div className='space-y-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
							Core toolkit
						</p>
						<h2
							id='skills-heading'
							className='text-3xl font-semibold text-[#121212] sm:text-4xl'
						>
							Engineering stack
						</h2>
						<p className='max-w-2xl text-base text-[#3D3D3D] sm:text-lg'>
							A blend of modern frameworks, typed tooling, and cloud
							infrastructure that keeps shipping fast and reliable.
						</p>
					</div>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{skillGroups.map((group) => (
							<div
								key={group.title}
								className='rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm shadow-black/5'
							>
								<h3 className='text-lg font-semibold text-[#121212]'>
									{group.title}
								</h3>
								<ul className='mt-3 space-y-2 text-sm text-[#3A3A3A]'>
									{group.items.map((item) => (
										<li key={item} className='flex items-center gap-2'>
											<span
												className='h-1.5 w-1.5 rounded-full bg-[#7C3AED]'
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
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
							How I work
						</p>
						<h2
							id='highlights-heading'
							className='text-3xl font-semibold text-[#121212] sm:text-4xl'
						>
							Guiding principles
						</h2>
					</div>
					<div className='grid gap-6 lg:grid-cols-3'>
						{highlights.map((highlight) => (
							<article
								key={highlight.title}
								className='flex flex-col gap-4 rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm shadow-black/5'
							>
								<h3 className='text-xl font-semibold text-[#121212]'>
									{highlight.title}
								</h3>
								<p className='text-sm leading-relaxed text-[#3D3D3D]'>
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
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
							Featured work
						</p>
						<h2
							id='projects-heading'
							className='text-3xl font-semibold text-[#121212] sm:text-4xl'
						>
							Projects that stand out
						</h2>
						<p className='max-w-2xl text-base text-[#3D3D3D] sm:text-lg'>
							A sample of recent initiatives that highlight my experience with
							product development from discovery through delivery.
						</p>
					</div>
					<div className='grid gap-6 lg:grid-cols-3'>
						{featuredProjects.map((project) => (
							<article
								key={project.name}
								className='flex flex-col gap-4 rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-lg shadow-black/10'
							>
								<h3 className='text-xl font-semibold text-[#121212]'>
									{project.name}
								</h3>
								<p className='text-sm leading-relaxed text-[#3D3D3D]'>
									{project.description}
								</p>
								<p className='text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]'>
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
						<p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
							Let&apos;s build together
						</p>
						<h2
							id='contact-heading'
							className='text-3xl font-semibold text-[#121212] sm:text-4xl'
						>
							Contact
						</h2>
						<p className='max-w-2xl text-base text-[#3D3D3D] sm:text-lg'>
							Ready to collaborate or chat about the next ambitious idea? Reach
							out through the channels below—I&apos;ll respond within a day.
						</p>
					</div>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{contactMethods.map((method) => (
							<a
								key={method.label}
								href={method.href}
								className='group rounded-2xl border border-[#E5E5E5] bg-white p-6 transition hover:border-[#7C3AED] hover:shadow-lg hover:shadow-black/10'
								target={method.href.startsWith('http') ? '_blank' : undefined}
								rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
							>
								<p className='text-xs font-semibold uppercase tracking-[0.35em] text-[#7C3AED]'>
									{method.label}
								</p>
								<p className='mt-3 text-lg font-medium text-[#212121] group-hover:text-[#7C3AED]'>
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
