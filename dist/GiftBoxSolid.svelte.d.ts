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
export type GiftBoxSolidProps = typeof __propDef.props;
export type GiftBoxSolidEvents = typeof __propDef.events;
export type GiftBoxSolidSlots = typeof __propDef.slots;
export default class GiftBoxSolid extends SvelteComponentTyped<GiftBoxSolidProps, GiftBoxSolidEvents, GiftBoxSolidSlots> {
}
export {};
