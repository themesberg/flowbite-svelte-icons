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
export type HourglassOutlineProps = typeof __propDef.props;
export type HourglassOutlineEvents = typeof __propDef.events;
export type HourglassOutlineSlots = typeof __propDef.slots;
export default class HourglassOutline extends SvelteComponentTyped<HourglassOutlineProps, HourglassOutlineEvents, HourglassOutlineSlots> {
}
export {};
