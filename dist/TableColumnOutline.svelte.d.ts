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
export type TableColumnOutlineProps = typeof __propDef.props;
export type TableColumnOutlineEvents = typeof __propDef.events;
export type TableColumnOutlineSlots = typeof __propDef.slots;
export default class TableColumnOutline extends SvelteComponentTyped<TableColumnOutlineProps, TableColumnOutlineEvents, TableColumnOutlineSlots> {
}
export {};
