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
export type GiftBoxOutlineProps = typeof __propDef.props;
export type GiftBoxOutlineEvents = typeof __propDef.events;
export type GiftBoxOutlineSlots = typeof __propDef.slots;
export default class GiftBoxOutline extends SvelteComponentTyped<GiftBoxOutlineProps, GiftBoxOutlineEvents, GiftBoxOutlineSlots> {
}
export {};
