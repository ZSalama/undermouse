import React from 'react'

export default function New_Hero(blog: any) {
	return (
		<main>
			<h1>Zack Salama</h1>
			<h2>Full-Stack Developer</h2>
			<section>
				<h3>Stack</h3>
				<ul>
					<li>Next.js</li>
					<li>TypeScript</li>
					<li>Tailwind CSS</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>PostgreSQL</li>
					<li>Prisma</li>
					<li>Docker</li>
					<li>AWS</li>
				</ul>
			</section>
			<section>
				<h3>Blog</h3>
				{blog.blog.map((post: any) => (
					<article key={post.sys.id}>
						<h4>{post.fields.title}</h4>
						<p>{post.fields.description}</p>
						<a href={`/blog/${post.fields.slug}`}>Read more</a>
					</article>
				))}
			</section>
			<section>
				<h3>Portfolio</h3>
				<ul>
					<li>temp</li>
				</ul>
			</section>
			<section>
				<h3>Contact</h3>
				<p>Email: undermouse@gmail.com</p>
			</section>
			<footer>
				<p>Footer</p>
			</footer>
		</main>
	)
}
