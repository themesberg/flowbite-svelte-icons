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
export type ShoppingBagSolidProps = typeof __propDef.props;
export type ShoppingBagSolidEvents = typeof __propDef.events;
export type ShoppingBagSolidSlots = typeof __propDef.slots;
export default class ShoppingBagSolid extends SvelteComponentTyped<ShoppingBagSolidProps, ShoppingBagSolidEvents, ShoppingBagSolidSlots> {
}
export {};
