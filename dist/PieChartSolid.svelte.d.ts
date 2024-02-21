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
export type PieChartSolidProps = typeof __propDef.props;
export type PieChartSolidEvents = typeof __propDef.events;
export type PieChartSolidSlots = typeof __propDef.slots;
export default class PieChartSolid extends SvelteComponentTyped<PieChartSolidProps, PieChartSolidEvents, PieChartSolidSlots> {
}
export {};
