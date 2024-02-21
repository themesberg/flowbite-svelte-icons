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
export type CalendarEditOutlineProps = typeof __propDef.props;
export type CalendarEditOutlineEvents = typeof __propDef.events;
export type CalendarEditOutlineSlots = typeof __propDef.slots;
export default class CalendarEditOutline extends SvelteComponentTyped<CalendarEditOutlineProps, CalendarEditOutlineEvents, CalendarEditOutlineSlots> {
}
export {};
