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
export type ChevronDoubleUpOutlineProps = typeof __propDef.props;
export type ChevronDoubleUpOutlineEvents = typeof __propDef.events;
export type ChevronDoubleUpOutlineSlots = typeof __propDef.slots;
export default class ChevronDoubleUpOutline extends SvelteComponentTyped<ChevronDoubleUpOutlineProps, ChevronDoubleUpOutlineEvents, ChevronDoubleUpOutlineSlots> {
}
export {};
