import type { SVGAttributes } from 'svelte/elements';

export type SizePreset = {
  size?: Size;
  width?: never;
  height?: never;
};

export type ExplicitSize = {
  size?: never;
  width?: number | string;
  height?: number | string;
};

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

export type BaseProps = SVGAttributes<SVGElement> &
  (SizePreset | ExplicitSize) & {
    color?: string | null;
  };

export type OutlineBaseProps = BaseProps & {
  strokeWidth?: number | `${number}`;
};

export interface AccessibleProps {
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}

export type Props = BaseProps & AccessibleProps;

export type OutlineProps = OutlineBaseProps & AccessibleProps;
