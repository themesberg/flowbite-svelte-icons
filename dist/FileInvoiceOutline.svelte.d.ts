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
export type FileInvoiceOutlineProps = typeof __propDef.props;
export type FileInvoiceOutlineEvents = typeof __propDef.events;
export type FileInvoiceOutlineSlots = typeof __propDef.slots;
export default class FileInvoiceOutline extends SvelteComponentTyped<FileInvoiceOutlineProps, FileInvoiceOutlineEvents, FileInvoiceOutlineSlots> {
}
export {};
