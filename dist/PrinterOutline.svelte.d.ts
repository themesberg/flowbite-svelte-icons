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
export type PrinterOutlineProps = typeof __propDef.props;
export type PrinterOutlineEvents = typeof __propDef.events;
export type PrinterOutlineSlots = typeof __propDef.slots;
export default class PrinterOutline extends SvelteComponentTyped<PrinterOutlineProps, PrinterOutlineEvents, PrinterOutlineSlots> {
}
export {};
