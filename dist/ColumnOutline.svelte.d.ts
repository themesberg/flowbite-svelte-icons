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
export type ColumnOutlineProps = typeof __propDef.props;
export type ColumnOutlineEvents = typeof __propDef.events;
export type ColumnOutlineSlots = typeof __propDef.slots;
export default class ColumnOutline extends SvelteComponentTyped<ColumnOutlineProps, ColumnOutlineEvents, ColumnOutlineSlots> {
}
export {};
