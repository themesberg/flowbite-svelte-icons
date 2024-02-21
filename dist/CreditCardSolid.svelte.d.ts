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
export type CreditCardSolidProps = typeof __propDef.props;
export type CreditCardSolidEvents = typeof __propDef.events;
export type CreditCardSolidSlots = typeof __propDef.slots;
export default class CreditCardSolid extends SvelteComponentTyped<CreditCardSolidProps, CreditCardSolidEvents, CreditCardSolidSlots> {
}
export {};
