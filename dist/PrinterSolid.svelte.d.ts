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
export type PrinterSolidProps = typeof __propDef.props;
export type PrinterSolidEvents = typeof __propDef.events;
export type PrinterSolidSlots = typeof __propDef.slots;
export default class PrinterSolid extends SvelteComponentTyped<PrinterSolidProps, PrinterSolidEvents, PrinterSolidSlots> {
}
export {};
