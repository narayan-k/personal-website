import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type Bubble = {
	id: number;
	x: number;
	y: number;
	size: number;
	width: number;
	height: number;
	driftX: number;
	driftY: number;
	duration: number;
	delay: number;
	opacity: number;
	rotate: number;
	radius: string;
};

const MAX_BUBBLES = 14;

export function CursorGlow() {
	const [bubbles, setBubbles] = useState<Bubble[]>([]);
	const nextIdRef = useRef(0);
	const lastSpawnRef = useRef(0);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

		if (prefersReducedMotion || !hasFinePointer) {
			document.documentElement.dataset.cursorGlow = "disabled";
			return;
		}

		document.documentElement.dataset.cursorGlow = "enabled";

		const spawnBubble = (x: number, y: number) => {
			const now = performance.now();

			if (now - lastSpawnRef.current < 90) {
				return;
			}

			lastSpawnRef.current = now;

			const size = 22 + Math.random() * 34;
			const stretchX = 0.72 + Math.random() * 0.85;
			const stretchY = 0.68 + Math.random() * 0.9;

			const bubble: Bubble = {
				id: nextIdRef.current++,
				x: x + (Math.random() - 0.5) * 22,
				y: y + (Math.random() - 0.5) * 22,
				size,
				width: size * stretchX,
				height: size * stretchY,
				driftX: (Math.random() - 0.5) * 54,
				driftY: -(52 + Math.random() * 110),
				duration: 2800 + Math.random() * 2200,
				delay: Math.random() * 140,
				opacity: 0.26 + Math.random() * 0.28,
				rotate: -34 + Math.random() * 68,
				radius: `${32 + Math.random() * 42}% ${58 + Math.random() * 30}% ${28 + Math.random() * 48}% ${52 + Math.random() * 34}% / ${26 + Math.random() * 46}% ${62 + Math.random() * 26}% ${30 + Math.random() * 42}% ${56 + Math.random() * 28}%`,
			};

			setBubbles((current) => [...current.slice(-(MAX_BUBBLES - 1)), bubble]);

			window.setTimeout(() => {
				setBubbles((current) => current.filter((item) => item.id !== bubble.id));
			}, bubble.duration + bubble.delay);
		};

		const handlePointerMove = (event: PointerEvent) => {
			spawnBubble(event.clientX, event.clientY);
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			document.documentElement.dataset.cursorGlow = "disabled";
		};
	}, []);

	return (
		<div className="cursor-bubbles" aria-hidden="true">
			{bubbles.map((bubble) => (
				<span
					key={bubble.id}
					className="cursor-bubble"
					style={
						{
							"--bubble-x": `${bubble.x}px`,
							"--bubble-y": `${bubble.y}px`,
							"--bubble-size": `${bubble.size}px`,
							"--bubble-width": `${bubble.width}px`,
							"--bubble-height": `${bubble.height}px`,
							"--bubble-drift-x": `${bubble.driftX}px`,
							"--bubble-drift-y": `${bubble.driftY}px`,
							"--bubble-duration": `${bubble.duration}ms`,
							"--bubble-delay": `${bubble.delay}ms`,
							"--bubble-opacity": bubble.opacity.toFixed(2),
							"--bubble-rotate": `${bubble.rotate}deg`,
							"--bubble-radius": bubble.radius,
						} as CSSProperties
					}
				/>
			))}
		</div>
	);
}
