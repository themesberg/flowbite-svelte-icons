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
export type ArrowSortLettersOutlineProps = typeof __propDef.props;
export type ArrowSortLettersOutlineEvents = typeof __propDef.events;
export type ArrowSortLettersOutlineSlots = typeof __propDef.slots;
export default class ArrowSortLettersOutline extends SvelteComponentTyped<ArrowSortLettersOutlineProps, ArrowSortLettersOutlineEvents, ArrowSortLettersOutlineSlots> {
}
export {};
