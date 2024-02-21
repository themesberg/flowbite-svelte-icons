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
export type ArrowsRepeatCountOutlineProps = typeof __propDef.props;
export type ArrowsRepeatCountOutlineEvents = typeof __propDef.events;
export type ArrowsRepeatCountOutlineSlots = typeof __propDef.slots;
export default class ArrowsRepeatCountOutline extends SvelteComponentTyped<ArrowsRepeatCountOutlineProps, ArrowsRepeatCountOutlineEvents, ArrowsRepeatCountOutlineSlots> {
}
export {};
