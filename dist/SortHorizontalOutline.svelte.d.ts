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
export type SortHorizontalOutlineProps = typeof __propDef.props;
export type SortHorizontalOutlineEvents = typeof __propDef.events;
export type SortHorizontalOutlineSlots = typeof __propDef.slots;
export default class SortHorizontalOutline extends SvelteComponentTyped<SortHorizontalOutlineProps, SortHorizontalOutlineEvents, SortHorizontalOutlineSlots> {
}
export {};
