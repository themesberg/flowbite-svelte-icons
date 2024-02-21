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
export type ColumnSolidProps = typeof __propDef.props;
export type ColumnSolidEvents = typeof __propDef.events;
export type ColumnSolidSlots = typeof __propDef.slots;
export default class ColumnSolid extends SvelteComponentTyped<ColumnSolidProps, ColumnSolidEvents, ColumnSolidSlots> {
}
export {};
