import { motion } from "framer-motion";
import { LiquidGlassButton } from "./LiquidGlass";

export function Hero() {
	return (
		<section className="section fade-in">
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
				transition={{ duration: 0.8, delay: 0.3 }}
				className="hero-subtitle"
			>
				Bridging data, code, and design to solve complex problems.
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				className="accent"
			>
				Python · JavaScript · HX Renew
			</motion.p>

			<div className="hero-buttons">
				<LiquidGlassButton href="#projects">View My Work</LiquidGlassButton>
				<LiquidGlassButton href="/images/CV.pdf">Download CV</LiquidGlassButton>
			</div>
		</section>
	);
}

export default Hero;
