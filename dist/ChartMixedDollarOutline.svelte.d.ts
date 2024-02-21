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
export type ChartMixedDollarOutlineProps = typeof __propDef.props;
export type ChartMixedDollarOutlineEvents = typeof __propDef.events;
export type ChartMixedDollarOutlineSlots = typeof __propDef.slots;
export default class ChartMixedDollarOutline extends SvelteComponentTyped<ChartMixedDollarOutlineProps, ChartMixedDollarOutlineEvents, ChartMixedDollarOutlineSlots> {
}
export {};
