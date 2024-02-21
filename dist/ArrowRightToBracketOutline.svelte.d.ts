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
export type ArrowRightToBracketOutlineProps = typeof __propDef.props;
export type ArrowRightToBracketOutlineEvents = typeof __propDef.events;
export type ArrowRightToBracketOutlineSlots = typeof __propDef.slots;
export default class ArrowRightToBracketOutline extends SvelteComponentTyped<ArrowRightToBracketOutlineProps, ArrowRightToBracketOutlineEvents, ArrowRightToBracketOutlineSlots> {
}
export {};
