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
export type ChartLineUpSolidProps = typeof __propDef.props;
export type ChartLineUpSolidEvents = typeof __propDef.events;
export type ChartLineUpSolidSlots = typeof __propDef.slots;
export default class ChartLineUpSolid extends SvelteComponentTyped<ChartLineUpSolidProps, ChartLineUpSolidEvents, ChartLineUpSolidSlots> {
}
export {};
