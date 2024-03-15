import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ArrowRightToBracketOutlineProps = typeof __propDef.props;
export type ArrowRightToBracketOutlineEvents = typeof __propDef.events;
export type ArrowRightToBracketOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'arrow right to bracket outline,';
 */
export default class ArrowRightToBracketOutline extends SvelteComponent<ArrowRightToBracketOutlineProps, ArrowRightToBracketOutlineEvents, ArrowRightToBracketOutlineSlots> {
}
export {};
