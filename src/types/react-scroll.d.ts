declare module "react-scroll" {
	import type { ComponentType, ReactNode } from "react";

	export interface LinkProps {
		to: string;
		smooth?: boolean;
		offset?: number;
		duration?: number;
		style?: React.CSSProperties;
		children?: ReactNode;
	}

	export interface ElementProps {
		name: string;
		children?: ReactNode;
	}

	export const Link: ComponentType<LinkProps>;
	export const Element: ComponentType<ElementProps>;
}
