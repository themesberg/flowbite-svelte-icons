import type { SVGAttributes } from 'svelte/elements';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TitleType =
	| {
			id: string;
			title?: string;
	  }
	| undefined;

export type DescType =
	| {
			id: string;
			desc?: string;
	  }
	| undefined;

export interface BaseProps extends SVGAttributes<SVGElement> {
	size?: Size;
	color?: string | null;
}

export interface OutlineBaseProps extends BaseProps {
	strokeWidth?: number | `${number}`;
}

export interface AccessibleProps {
	title?: TitleType;
	desc?: DescType;
	ariaLabel?: string;
}

export interface Props extends BaseProps, AccessibleProps {}

export interface OutlineProps extends OutlineBaseProps, AccessibleProps {}
