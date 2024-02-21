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
export type ReceiptSolidProps = typeof __propDef.props;
export type ReceiptSolidEvents = typeof __propDef.events;
export type ReceiptSolidSlots = typeof __propDef.slots;
export default class ReceiptSolid extends SvelteComponentTyped<ReceiptSolidProps, ReceiptSolidEvents, ReceiptSolidSlots> {
}
export {};
