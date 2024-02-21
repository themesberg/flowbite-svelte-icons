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
export type ChevronDoubleDownOutlineProps = typeof __propDef.props;
export type ChevronDoubleDownOutlineEvents = typeof __propDef.events;
export type ChevronDoubleDownOutlineSlots = typeof __propDef.slots;
export default class ChevronDoubleDownOutline extends SvelteComponentTyped<ChevronDoubleDownOutlineProps, ChevronDoubleDownOutlineEvents, ChevronDoubleDownOutlineSlots> {
}
export {};
