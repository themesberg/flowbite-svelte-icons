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
export type CreditCardOutlineProps = typeof __propDef.props;
export type CreditCardOutlineEvents = typeof __propDef.events;
export type CreditCardOutlineSlots = typeof __propDef.slots;
export default class CreditCardOutline extends SvelteComponentTyped<CreditCardOutlineProps, CreditCardOutlineEvents, CreditCardOutlineSlots> {
}
export {};
