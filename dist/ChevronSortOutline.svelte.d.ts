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
export type ChevronSortOutlineProps = typeof __propDef.props;
export type ChevronSortOutlineEvents = typeof __propDef.events;
export type ChevronSortOutlineSlots = typeof __propDef.slots;
export default class ChevronSortOutline extends SvelteComponentTyped<ChevronSortOutlineProps, ChevronSortOutlineEvents, ChevronSortOutlineSlots> {
}
export {};
