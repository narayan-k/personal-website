import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface LiquidGlassButtonProps {
	children: ReactNode;
	href: string;
	icon?: ReactNode;
	className?: string;
}

export function LiquidGlassButton({
	children,
	href,
	icon,
	className = "",
}: LiquidGlassButtonProps) {
	const isScrollLink = href.startsWith("#");
	const opensNewTab =
		href.startsWith("http://") || href.startsWith("https://");

	const baseMotionProps = {
		whileHover: {
			scale: 1.03,
			y: -2,
		},
		whileTap: { scale: 0.985 },
		transition: { type: "spring", stiffness: 280, damping: 24 } as const,
		className: `button-glass ${className}`.trim(),
		children: (
			<>
				<span className="button-glass-highlight" aria-hidden="true" />
				<span className="button-glass-shadow" aria-hidden="true" />
				<span className="button-glass-content">
					{icon ? <span className="button-glass-icon">{icon}</span> : null}
					<span>{children}</span>
				</span>
			</>
		),
	};

	if (isScrollLink) {
		const sectionName = href.replace("#", "");
		return (
			<Link
				to={sectionName}
				smooth={true}
				offset={-60}
				duration={600}
				style={{ display: "inline-block" }}
			>
				<motion.div {...baseMotionProps} />
			</Link>
		);
	}

	return (
		<motion.a
			href={href}
			target={opensNewTab ? "_blank" : undefined}
			rel={opensNewTab ? "noopener noreferrer" : undefined}
			{...baseMotionProps}
		/>
	);
}
