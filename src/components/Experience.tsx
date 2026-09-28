interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
	focus: string;
}

const experiences: ExperienceItem[] = [
	{
		company: "Stealth",
		role: "Member of Technical Staff",
		period: "Aug 2026 - Present",
		description: "Building tools and workflows for AI systems in stealth.",
		focus: "AI",
	},
	{
		company: "Hyperexponential",
		role: "Model Developer",
		period: "Sep 2024 - Jul 2026",
		description: "Built pricing and risk models, plus tools to make technical work faster.",
		focus: "Modeling / Tooling",
	},
	{
		company: "Mindstep",
		role: "Data Scientist",
		period: "2020 - 2024",
		description: "Built and validated models to predict neurological outcomes.",
		focus: "ML / Validation",
	},
	{
		company: "Imperial College London",
		role: "Master's Project",
		period: "2019 - 2020",
		description: "Built a transformer model to predict molecular properties.",
		focus: "Research / NLP",
	},
];

export function Experience() {
	return (
		<section className="section experience-section" id="experience">
			<div className="experience-layout">
				<div className="experience-intro">
					<p className="section-kicker">Experience</p>
					<h2 className="experience-title">Building Across AI, Data, and Product</h2>
					<p className="experience-summary">
						I work across AI, software, and product, turning complex technical
						ideas into tools people can use with confidence.
					</p>
				</div>

				<div className="experience-list">
					{experiences.map((experience) => (
						<article key={experience.company} className="experience-card">
							<div className="experience-card-top">
								<p className="section-kicker">{experience.focus}</p>
								<p className="experience-period">{experience.period}</p>
							</div>
							<h3 className="experience-role">{experience.role}</h3>
							<p className="experience-company">{experience.company}</p>
							<p className="experience-description">{experience.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
