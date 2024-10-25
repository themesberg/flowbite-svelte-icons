import type { SVGAttributes } from 'svelte/elements';
export type TitleType = {
  id?: string;
  title?: string;
};

export type DescType = {
  id?: string;
  desc?: string;
};

export interface BaseProps extends SVGAttributes<SVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string | undefined | null;
  class?: string | undefined | null;
}

export interface OutlineBaseProps extends BaseProps {
  strokeWidth?: string | undefined | null;
}

export interface Props extends BaseProps {
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface OutlineProps extends OutlineBaseProps {
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
