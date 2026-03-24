import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
}

const experiences: ExperienceItem[] = [
	{
		company: "Hyperexponential",
		role: "Model Developer",
		period: "Sep 2024 – Present",
		description:
			"Designed and implemented Python and JavaScript risk models for pricing and risk analysis. Led code reviews, built internal tooling, and coached actuaries and junior developers on writing clearer, more performant code.",
	},
	{
		company: "Mindstep",
		role: "AI Lead",
		period: "2020 – 2024",
		description:
			"Led development of machine-learning pipelines and models to predict neurological outcomes. Designed experiments, performed statistical validation and model evaluation, and productionised reproducible training workflows.",
	},
	{
		company: "Imperial College London",
		role: "Master's Project",
		period: "2019 – 2020",
		description:
			"Researched and implemented a transformer-based architecture to predict molecular properties, achieving state-of-the-art performance on benchmark datasets.",
	},
];

export function Experience() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: false, margin: "-50px" });

	return (
		<section ref={ref} className="section experience-section" id="experience">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className="experience-title"
			>
				Experience
			</motion.h2>

			<div className="timeline-container">
				{/* Vertical timeline line */}
				<motion.div
					initial={{ scaleY: 0 }}
					animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="timeline-line"
				/>

				{experiences.map((exp, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, x: -40 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: i * 0.3 }}
						className="timeline-item"
					>
						<div className="timeline-dot" />
						<div className="timeline-content glass">
							<h3 className="timeline-role">{exp.role}</h3>
							<p className="timeline-meta">
								{exp.company} • {exp.period}
							</p>
							<p className="timeline-description">{exp.description}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Experience;
