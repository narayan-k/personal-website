import { motion } from "framer-motion";

interface Project {
	title: string;
	description: string;
	image: string;
	link: string;
	label: string;
	year: string;
	outcome: string;
}

const projects: Project[] = [
	{
		title: "Since Then App",
		description:
			"A habit-building iOS app designed to make progress feel tangible instead of abstract.",
		image: "/images/since_then_ad.mp4",
		link: "https://apps.apple.com/app/since-then/id6754298217",
		label: "App",
		year: "2025",
		outcome: "Shipped a focused consumer product with a clear daily-use loop.",
	},
	{
		title: "HX Personal Project",
		description:
			"A stocks and shares dashboard built in HX Renew with React-based CUICs and live market data.",
		image: "/images/hx_personal_project.mp4",
		link: "https://www.hyperexponential.com",
		label: "System",
		year: "2024",
		outcome: "Explored how dense financial data can feel clearer, faster, and more navigable.",
	},
	{
		title: "Daily Stock Report Bot",
		description:
			"An automated Python workflow that sends market summaries by email using templated reporting.",
		image: "/images/daily-stock-report.png",
		link: "https://github.com/narayan-k/daily-stock-report",
		label: "Automation",
		year: "2024",
		outcome: "Turned repetitive analysis into a lightweight repeatable reporting system.",
	},
	{
		title: "Mindstep Cognitive Model Validation",
		description:
			"Validation work for an ML-based cognitive screening model, later published in Frontiers in Digital Health.",
		image: "/images/mindstep_AUC.png",
		link: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2022.1029810/full",
		label: "Research",
		year: "2022",
		outcome: "Produced evidence for a faster and more accurate screening approach.",
	},
];

export function Projects() {
	const [featuredProject, ...supportingProjects] = projects;

	return (
		<section id="projects" className="projects-section">
			<div className="projects-header">
				<div>
					<p className="section-kicker">Projects</p>
					<h2 className="projects-title">Selected Work</h2>
				</div>
				<p className="project-index">04 Projects / Product + Research</p>
			</div>

			<div className="projects-editorial-grid">
				<motion.article
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.55 }}
					className="project-feature"
				>
					<ProjectMedia project={featuredProject} priority />
					<div className="project-feature-copy">
						<div className="project-meta-row">
							<p className="section-kicker">{featuredProject.label}</p>
							<p className="project-year">{featuredProject.year}</p>
						</div>
						<h3>{featuredProject.title}</h3>
						<p>{featuredProject.description}</p>
						<p className="project-outcome">{featuredProject.outcome}</p>
						<a
							href={featuredProject.link}
							target="_blank"
							rel="noopener noreferrer"
							className="button-glass"
						>
							<span>Open Project</span>
						</a>
					</div>
				</motion.article>

				<div className="project-supporting-grid">
					{supportingProjects.map((project, index) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="project-card"
						>
							<ProjectMedia project={project} />
							<div className="project-card-copy">
								<div className="project-meta-row">
									<p className="section-kicker">{project.label}</p>
									<p className="project-year">{project.year}</p>
								</div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<p className="project-outcome">{project.outcome}</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link"
								>
									View Project
								</a>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectMedia({
	project,
	priority = false,
}: {
	project: Project;
	priority?: boolean;
}) {
	return (
		<div className={`project-image-frame${priority ? " project-image-frame-featured" : ""}`}>
			{project.image.endsWith(".mp4") ? (
				<video
					src={project.image}
					className="project-image"
					autoPlay
					loop
					muted
					playsInline
				/>
			) : (
				<img src={project.image} alt={project.title} className="project-image" />
			)}
		</div>
	);
}
