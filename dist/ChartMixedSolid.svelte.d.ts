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
export type ChartMixedSolidProps = typeof __propDef.props;
export type ChartMixedSolidEvents = typeof __propDef.events;
export type ChartMixedSolidSlots = typeof __propDef.slots;
export default class ChartMixedSolid extends SvelteComponentTyped<ChartMixedSolidProps, ChartMixedSolidEvents, ChartMixedSolidSlots> {
}
export {};
