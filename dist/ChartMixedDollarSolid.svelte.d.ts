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
export type ChartMixedDollarSolidProps = typeof __propDef.props;
export type ChartMixedDollarSolidEvents = typeof __propDef.events;
export type ChartMixedDollarSolidSlots = typeof __propDef.slots;
export default class ChartMixedDollarSolid extends SvelteComponentTyped<ChartMixedDollarSolidProps, ChartMixedDollarSolidEvents, ChartMixedDollarSolidSlots> {
}
export {};
