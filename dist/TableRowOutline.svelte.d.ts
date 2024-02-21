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
export type TableRowOutlineProps = typeof __propDef.props;
export type TableRowOutlineEvents = typeof __propDef.events;
export type TableRowOutlineSlots = typeof __propDef.slots;
export default class TableRowOutline extends SvelteComponentTyped<TableRowOutlineProps, TableRowOutlineEvents, TableRowOutlineSlots> {
}
export {};
