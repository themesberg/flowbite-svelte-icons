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
export type ArrowUpFromBracketOutlineProps = typeof __propDef.props;
export type ArrowUpFromBracketOutlineEvents = typeof __propDef.events;
export type ArrowUpFromBracketOutlineSlots = typeof __propDef.slots;
export default class ArrowUpFromBracketOutline extends SvelteComponentTyped<ArrowUpFromBracketOutlineProps, ArrowUpFromBracketOutlineEvents, ArrowUpFromBracketOutlineSlots> {
}
export {};
