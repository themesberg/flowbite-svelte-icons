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
export type UndoOutlineProps = typeof __propDef.props;
export type UndoOutlineEvents = typeof __propDef.events;
export type UndoOutlineSlots = typeof __propDef.slots;
export default class UndoOutline extends SvelteComponentTyped<UndoOutlineProps, UndoOutlineEvents, UndoOutlineSlots> {
}
export {};
