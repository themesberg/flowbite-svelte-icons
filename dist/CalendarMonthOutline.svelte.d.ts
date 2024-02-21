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
export type CalendarMonthOutlineProps = typeof __propDef.props;
export type CalendarMonthOutlineEvents = typeof __propDef.events;
export type CalendarMonthOutlineSlots = typeof __propDef.slots;
export default class CalendarMonthOutline extends SvelteComponentTyped<CalendarMonthOutlineProps, CalendarMonthOutlineEvents, CalendarMonthOutlineSlots> {
}
export {};
