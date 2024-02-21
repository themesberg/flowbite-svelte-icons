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
export type ArrowDownOutlineProps = typeof __propDef.props;
export type ArrowDownOutlineEvents = typeof __propDef.events;
export type ArrowDownOutlineSlots = typeof __propDef.slots;
export default class ArrowDownOutline extends SvelteComponentTyped<ArrowDownOutlineProps, ArrowDownOutlineEvents, ArrowDownOutlineSlots> {
}
export {};
