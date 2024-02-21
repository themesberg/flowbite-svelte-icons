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
export type ShieldCheckOutlineProps = typeof __propDef.props;
export type ShieldCheckOutlineEvents = typeof __propDef.events;
export type ShieldCheckOutlineSlots = typeof __propDef.slots;
export default class ShieldCheckOutline extends SvelteComponentTyped<ShieldCheckOutlineProps, ShieldCheckOutlineEvents, ShieldCheckOutlineSlots> {
}
export {};
