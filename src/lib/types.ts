import type { SVGAttributes } from 'svelte/elements';
import type { ClassValue } from 'clsx'; 

export type TitleType = {
  id?: string;
  title?: string;
};

export type DescType = {
  id?: string;
  desc?: string;
};

export interface BaseProps extends Omit<SVGAttributes<SVGElement>, 'class'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string | undefined | null;
  class?: ClassValue;
}

export interface OutlineBaseProps extends BaseProps{
  strokeWidth?: string | undefined | null;
}

export interface Props extends BaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface OutlineProps extends OutlineBaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}