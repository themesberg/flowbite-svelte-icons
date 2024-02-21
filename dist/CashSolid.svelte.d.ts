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
export type CashSolidProps = typeof __propDef.props;
export type CashSolidEvents = typeof __propDef.events;
export type CashSolidSlots = typeof __propDef.slots;
export default class CashSolid extends SvelteComponentTyped<CashSolidProps, CashSolidEvents, CashSolidSlots> {
}
export {};
