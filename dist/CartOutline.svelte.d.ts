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
export type CartOutlineProps = typeof __propDef.props;
export type CartOutlineEvents = typeof __propDef.events;
export type CartOutlineSlots = typeof __propDef.slots;
export default class CartOutline extends SvelteComponentTyped<CartOutlineProps, CartOutlineEvents, CartOutlineSlots> {
}
export {};
