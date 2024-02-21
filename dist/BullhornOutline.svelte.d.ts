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
export type BullhornOutlineProps = typeof __propDef.props;
export type BullhornOutlineEvents = typeof __propDef.events;
export type BullhornOutlineSlots = typeof __propDef.slots;
export default class BullhornOutline extends SvelteComponentTyped<BullhornOutlineProps, BullhornOutlineEvents, BullhornOutlineSlots> {
}
export {};
