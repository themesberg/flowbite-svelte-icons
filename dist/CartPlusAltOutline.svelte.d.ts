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
export type CartPlusAltOutlineProps = typeof __propDef.props;
export type CartPlusAltOutlineEvents = typeof __propDef.events;
export type CartPlusAltOutlineSlots = typeof __propDef.slots;
export default class CartPlusAltOutline extends SvelteComponentTyped<CartPlusAltOutlineProps, CartPlusAltOutlineEvents, CartPlusAltOutlineSlots> {
}
export {};
