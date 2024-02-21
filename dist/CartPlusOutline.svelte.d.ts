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
export type CartPlusOutlineProps = typeof __propDef.props;
export type CartPlusOutlineEvents = typeof __propDef.events;
export type CartPlusOutlineSlots = typeof __propDef.slots;
export default class CartPlusOutline extends SvelteComponentTyped<CartPlusOutlineProps, CartPlusOutlineEvents, CartPlusOutlineSlots> {
}
export {};
