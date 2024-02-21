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
export type ChartLineUpOutlineProps = typeof __propDef.props;
export type ChartLineUpOutlineEvents = typeof __propDef.events;
export type ChartLineUpOutlineSlots = typeof __propDef.slots;
export default class ChartLineUpOutline extends SvelteComponentTyped<ChartLineUpOutlineProps, ChartLineUpOutlineEvents, ChartLineUpOutlineSlots> {
}
export {};
