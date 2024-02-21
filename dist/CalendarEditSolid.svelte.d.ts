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
export type CalendarEditSolidProps = typeof __propDef.props;
export type CalendarEditSolidEvents = typeof __propDef.events;
export type CalendarEditSolidSlots = typeof __propDef.slots;
export default class CalendarEditSolid extends SvelteComponentTyped<CalendarEditSolidProps, CalendarEditSolidEvents, CalendarEditSolidSlots> {
}
export {};
