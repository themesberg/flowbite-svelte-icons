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
export type CalendarMonthSolidProps = typeof __propDef.props;
export type CalendarMonthSolidEvents = typeof __propDef.events;
export type CalendarMonthSolidSlots = typeof __propDef.slots;
export default class CalendarMonthSolid extends SvelteComponentTyped<CalendarMonthSolidProps, CalendarMonthSolidEvents, CalendarMonthSolidSlots> {
}
export {};
