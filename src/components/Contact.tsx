import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LiquidGlassButton } from "./LiquidGlass";

export function Contact() {
	const fadeIn = (delay: number) => ({
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6, delay },
		viewport: { once: true },
	});

	return (
		<section className="section fade-in" id="contact">
			<motion.h2 {...fadeIn(0)} className="contact-title">
				Get in Touch
			</motion.h2>

			<motion.p {...fadeIn(0.2)} className="contact-text">
				I’m always open to new opportunities, collaborations, or just a friendly
				chat. Feel free to reach out!
			</motion.p>

			<motion.div {...fadeIn(0.4)} className="contact-links">
				<ContactLink
					href="mailto:nkuleindiren@gmail.com"
					label="Email"
					icon={<HiOutlineMail size={20} />}
				/>
				<ContactLink
					href="https://www.linkedin.com/in/narayan-kuleindiren/"
					label="LinkedIn"
					icon={<FaLinkedin size={20} />}
				/>
				<ContactLink
					href="https://github.com/narayan-k"
					label="GitHub"
					icon={<FaGithub size={20} />}
				/>
			</motion.div>

			<motion.p {...fadeIn(0.6)} className="contact-footer">
				© {new Date().getFullYear()} Narayan Kuleindiren — All Rights Reserved
			</motion.p>
		</section>
	);
}

interface ContactLinkProps {
	href: string;
	label: string;
	icon: ReactNode;
}

function ContactLink({ href, label, icon }: ContactLinkProps) {
	return (
		<LiquidGlassButton href={href} icon={icon} className="contact-button">
			{label}
		</LiquidGlassButton>
	);
}
