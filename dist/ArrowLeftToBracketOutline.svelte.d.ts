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
export type ArrowLeftToBracketOutlineProps = typeof __propDef.props;
export type ArrowLeftToBracketOutlineEvents = typeof __propDef.events;
export type ArrowLeftToBracketOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?: "xs" | "sm" | "md" | "lg" | "xl";
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class ArrowLeftToBracketOutline extends SvelteComponent<ArrowLeftToBracketOutlineProps, ArrowLeftToBracketOutlineEvents, ArrowLeftToBracketOutlineSlots> {
}
export {};
