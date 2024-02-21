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
export type TableRowSolidProps = typeof __propDef.props;
export type TableRowSolidEvents = typeof __propDef.events;
export type TableRowSolidSlots = typeof __propDef.slots;
export default class TableRowSolid extends SvelteComponentTyped<TableRowSolidProps, TableRowSolidEvents, TableRowSolidSlots> {
}
export {};
