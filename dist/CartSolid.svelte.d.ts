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
export type CartSolidProps = typeof __propDef.props;
export type CartSolidEvents = typeof __propDef.events;
export type CartSolidSlots = typeof __propDef.slots;
export default class CartSolid extends SvelteComponentTyped<CartSolidProps, CartSolidEvents, CartSolidSlots> {
}
export {};
