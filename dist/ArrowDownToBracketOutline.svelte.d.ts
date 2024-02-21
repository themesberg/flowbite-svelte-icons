import { SvelteComponentTyped } from "svelte";
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
export type ArrowDownToBracketOutlineProps = typeof __propDef.props;
export type ArrowDownToBracketOutlineEvents = typeof __propDef.events;
export type ArrowDownToBracketOutlineSlots = typeof __propDef.slots;
export default class ArrowDownToBracketOutline extends SvelteComponentTyped<ArrowDownToBracketOutlineProps, ArrowDownToBracketOutlineEvents, ArrowDownToBracketOutlineSlots> {
}
export {};
