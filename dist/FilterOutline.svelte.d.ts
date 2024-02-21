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
export type FilterOutlineProps = typeof __propDef.props;
export type FilterOutlineEvents = typeof __propDef.events;
export type FilterOutlineSlots = typeof __propDef.slots;
export default class FilterOutline extends SvelteComponentTyped<FilterOutlineProps, FilterOutlineEvents, FilterOutlineSlots> {
}
export {};
