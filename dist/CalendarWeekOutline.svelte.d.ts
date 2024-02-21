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
export type CalendarWeekOutlineProps = typeof __propDef.props;
export type CalendarWeekOutlineEvents = typeof __propDef.events;
export type CalendarWeekOutlineSlots = typeof __propDef.slots;
export default class CalendarWeekOutline extends SvelteComponentTyped<CalendarWeekOutlineProps, CalendarWeekOutlineEvents, CalendarWeekOutlineSlots> {
}
export {};
