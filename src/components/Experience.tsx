import { motion } from "framer-motion";

interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
	focus: string;
}

const experiences: ExperienceItem[] = [
	{
		company: "Hyperexponential",
		role: "Model Developer",
		period: "Sep 2024 - Present",
		description:
			"Designing and shipping Python and JavaScript risk models for pricing and risk analysis, alongside internal tools that make technical work clearer and faster.",
		focus: "Modeling / Tooling",
	},
	{
		company: "Mindstep",
		role: "Data Scientist",
		period: "2020 - 2024",
		description:
			"Led machine-learning development for neurological outcome prediction, including experimentation, validation, and reproducible training workflows.",
		focus: "ML / Validation",
	},
	{
		company: "Imperial College London",
		role: "Master's Project",
		period: "2019 - 2020",
		description:
			"Researched and implemented a transformer-based model for molecular property prediction, pushing benchmark performance on a difficult technical problem.",
		focus: "Research / NLP",
	},
];

export function Experience() {
	return (
		<section className="section experience-section" id="experience">
			<div className="experience-layout">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.55 }}
					className="experience-intro"
				>
					<p className="section-kicker">Experience</p>
					<h2 className="experience-title">Building Across Data, Research, and Product</h2>
					<p className="experience-summary">
						My work sits between modeling, software, and interface design. I like
						turning complex systems into tools that people can actually use with
						confidence.
					</p>
				</motion.div>

				<div className="experience-list">
					{experiences.map((experience, index) => (
						<motion.article
							key={experience.company}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="experience-card"
						>
							<div className="experience-card-top">
								<p className="section-kicker">{experience.focus}</p>
								<p className="experience-period">{experience.period}</p>
							</div>
							<h3 className="experience-role">{experience.role}</h3>
							<p className="experience-company">{experience.company}</p>
							<p className="experience-description">{experience.description}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
