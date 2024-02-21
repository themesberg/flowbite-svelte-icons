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
export type ChartMixedOutlineProps = typeof __propDef.props;
export type ChartMixedOutlineEvents = typeof __propDef.events;
export type ChartMixedOutlineSlots = typeof __propDef.slots;
export default class ChartMixedOutline extends SvelteComponentTyped<ChartMixedOutlineProps, ChartMixedOutlineEvents, ChartMixedOutlineSlots> {
}
export {};
