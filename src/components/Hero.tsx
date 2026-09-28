import { motion } from "framer-motion";
import { LiquidGlassButton } from "./LiquidGlass";

export function Hero() {
	return (
		<section className="section fade-in" id="hero">
			<div className="hero-grid">
				<div className="hero-copy">
					<motion.p
						initial={{ opacity: 0, y: -12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="section-kicker"
					>
						London / AI / Software
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="hero-title"
					>
						Narayan Kuleindiren
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="hero-subtitle"
					>
						I build useful AI tools and products at the intersection of
						engineering, data, and design.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.45 }}
						className="accent"
					>
						Python / React / AI / Product Thinking
					</motion.p>

					<div className="hero-buttons">
						<LiquidGlassButton href="#projects">Selected Work</LiquidGlassButton>
						<LiquidGlassButton href="/images/CV.pdf">Download CV</LiquidGlassButton>
					</div>
				</div>

				<motion.aside
					initial={{ opacity: 0, x: 24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="hero-note"
				>
					<p className="section-kicker">Current Focus</p>
					<p>
						Building tools and workflows that help make AI systems more useful.
					</p>
				</motion.aside>
			</div>
		</section>
	);
}

export default Hero;
