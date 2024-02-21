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
export type ArrowUpDownOutlineProps = typeof __propDef.props;
export type ArrowUpDownOutlineEvents = typeof __propDef.events;
export type ArrowUpDownOutlineSlots = typeof __propDef.slots;
export default class ArrowUpDownOutline extends SvelteComponentTyped<ArrowUpDownOutlineProps, ArrowUpDownOutlineEvents, ArrowUpDownOutlineSlots> {
}
export {};
