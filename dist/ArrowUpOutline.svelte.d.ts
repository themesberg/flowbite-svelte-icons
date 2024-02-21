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
export type ArrowUpOutlineProps = typeof __propDef.props;
export type ArrowUpOutlineEvents = typeof __propDef.events;
export type ArrowUpOutlineSlots = typeof __propDef.slots;
export default class ArrowUpOutline extends SvelteComponentTyped<ArrowUpOutlineProps, ArrowUpOutlineEvents, ArrowUpOutlineSlots> {
}
export {};
