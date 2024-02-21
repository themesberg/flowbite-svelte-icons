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
export type ChartLineDownOutlineProps = typeof __propDef.props;
export type ChartLineDownOutlineEvents = typeof __propDef.events;
export type ChartLineDownOutlineSlots = typeof __propDef.slots;
export default class ChartLineDownOutline extends SvelteComponentTyped<ChartLineDownOutlineProps, ChartLineDownOutlineEvents, ChartLineDownOutlineSlots> {
}
export {};
