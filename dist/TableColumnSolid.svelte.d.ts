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
export type TableColumnSolidProps = typeof __propDef.props;
export type TableColumnSolidEvents = typeof __propDef.events;
export type TableColumnSolidSlots = typeof __propDef.slots;
export default class TableColumnSolid extends SvelteComponentTyped<TableColumnSolidProps, TableColumnSolidEvents, TableColumnSolidSlots> {
}
export {};
