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
export type ChartSolidProps = typeof __propDef.props;
export type ChartSolidEvents = typeof __propDef.events;
export type ChartSolidSlots = typeof __propDef.slots;
export default class ChartSolid extends SvelteComponentTyped<ChartSolidProps, ChartSolidEvents, ChartSolidSlots> {
}
export {};
