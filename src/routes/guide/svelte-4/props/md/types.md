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
role?: string;
color?: string;
withEvents?: boolean;
onclick?: (event: MouseEvent) => void;
onkeydown?: (event: KeyboardEvent) => void;
onkeyup?: (event: KeyboardEvent) => void;
// only Outline icons
strokeWidth?: string;
}

interface CtxType extends BaseProps {}
interface Props extends BaseProps{
title?: TitleType;
desc?: DescType;
ariaLabel?: string;
size?: "xs" | "sm" | "md" | "lg" | "xl";
}
