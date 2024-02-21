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
export type ClockOutlineProps = typeof __propDef.props;
export type ClockOutlineEvents = typeof __propDef.events;
export type ClockOutlineSlots = typeof __propDef.slots;
export default class ClockOutline extends SvelteComponentTyped<ClockOutlineProps, ClockOutlineEvents, ClockOutlineSlots> {
}
export {};
