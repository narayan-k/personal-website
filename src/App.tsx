import { Link, Element } from "react-scroll";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";

export default function App() {
	return (
		<>
			<CursorGlow />
			<nav>
				{[
					"Hero",
					"Experience",
					"Projects",
					"Contact",
				].map((section) => (
					<Link
						key={section}
						to={section.toLowerCase()}
						smooth={true}
						offset={-0}
						duration={500}
					>
						{section}
					</Link>
				))}
			</nav>

			<main>
				<Element name="hero">
					<Hero />
				</Element>
				<Element name="experience">
					<Experience />
				</Element>
				<Element name="projects">
					<Projects />
				</Element>
				<Element name="contact">
					<Contact />
				</Element>
			</main>
		</>
	);
}
