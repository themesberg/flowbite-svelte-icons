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
export type SortOutlineProps = typeof __propDef.props;
export type SortOutlineEvents = typeof __propDef.events;
export type SortOutlineSlots = typeof __propDef.slots;
export default class SortOutline extends SvelteComponentTyped<SortOutlineProps, SortOutlineEvents, SortOutlineSlots> {
}
export {};
