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
export type ChartOutlineProps = typeof __propDef.props;
export type ChartOutlineEvents = typeof __propDef.events;
export type ChartOutlineSlots = typeof __propDef.slots;
export default class ChartOutline extends SvelteComponentTyped<ChartOutlineProps, ChartOutlineEvents, ChartOutlineSlots> {
}
export {};
