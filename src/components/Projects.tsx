import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
	{
		title: "Since Then App",
		description:
			"A simple app to track your progress and build better habits, built with Swift.",
		image: "/images/since_then_ad.mp4",
		link: "https://apps.apple.com/app/since-then/id6754298217",
	},
	{
		title: "Daily Stock Report Bot",
		description:
			"A Python bot that sends daily stock market reports via email, utilizing yfinance for data retrieval and jinja2 for templating.",
		image: "/images/daily-stock-report.png",
		link: "https://github.com/narayan-k/daily-stock-report",
	},
	{
		title: "HX Personal Project",
		description:
			"A stocks and shares dashboard built in hx renew using React based CUICs and fmp API data.",
		image: "/images/hx_personal_project.mp4",
		link: "https://www.hyperexponential.com",
	},
	{
		title: "Validation of the Mindstep Cognitive Screening Model",
		description:
			"Evaluated and validated a machine-learning–based cognitive screening tool (MScore) that offers faster, more accurate detection of mild cognitive impairment, with findings published in Frontiers in Digital Health.",
		image: "/images/mindstep_AUC.png",
		link: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2022.1029810/full",
	}
];

export function Projects() {
	const [current, setCurrent] = useState(0);
	const [paused, setPaused] = useState(false);

	// Auto-play logic
	useEffect(() => {
		if (paused) return;
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % projects.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [paused]);

	const next = () => setCurrent((prev) => (prev + 1) % projects.length);
	const prev = () =>
		setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section
			className="projects-section"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<h2 className="projects-title">Projects</h2>

			<div className="carousel-container">
				<AnimatePresence mode="wait">
					<motion.div
						key={current}
						className="carousel-item glass"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
					>
						<div className="project-image-frame">
							{projects[current].image.endsWith(".mp4") ? (
								<video
									src={projects[current].image}
									className="project-image"
									autoPlay
									loop
									muted
									playsInline
								/>
							) : (
								<img
									src={projects[current].image}
									alt={projects[current].title}
									className="project-image"
								/>
							)}
						</div>

						<div className="project-details">
							<h3>{projects[current].title}</h3>
							<p>{projects[current].description}</p>
							{projects[current].link ? (
							<a
								href={projects[current].link}
								target="_blank"
								rel="noopener noreferrer"
								className="button-glass shimmer"
							>
								<span>View Project →</span>
							</a>
							) : (
							<button className="button-glass shimmer coming-soon" disabled>
								<span>Coming Soon ⏳</span>
							</button>
							)}
						</div>
					</motion.div>
				</AnimatePresence>

				<div className="carousel-controls">
					<button onClick={prev} aria-label="Previous project">
						←
					</button>
					<button onClick={next} aria-label="Next project">
						→
					</button>
				</div>
			</div>
		</section>
	);
}
