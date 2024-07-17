type TitleType = {
  id?: string;
  title?: string;
};
type DescType = {
  id?: string;
  desc?: string;
};

interface BaseProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  strokeWidth?: string; // only for Outline icons
  class?: string;
}

interface CtxType extends BaseProps {}
interface Props extends BaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}