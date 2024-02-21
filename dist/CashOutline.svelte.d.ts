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
export type CashOutlineProps = typeof __propDef.props;
export type CashOutlineEvents = typeof __propDef.events;
export type CashOutlineSlots = typeof __propDef.slots;
export default class CashOutline extends SvelteComponentTyped<CashOutlineProps, CashOutlineEvents, CashOutlineSlots> {
}
export {};
