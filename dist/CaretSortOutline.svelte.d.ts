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
export type CaretSortOutlineProps = typeof __propDef.props;
export type CaretSortOutlineEvents = typeof __propDef.events;
export type CaretSortOutlineSlots = typeof __propDef.slots;
export default class CaretSortOutline extends SvelteComponentTyped<CaretSortOutlineProps, CaretSortOutlineEvents, CaretSortOutlineSlots> {
}
export {};
