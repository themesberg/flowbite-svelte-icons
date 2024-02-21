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
export type CalendarPlusOutlineProps = typeof __propDef.props;
export type CalendarPlusOutlineEvents = typeof __propDef.events;
export type CalendarPlusOutlineSlots = typeof __propDef.slots;
export default class CalendarPlusOutline extends SvelteComponentTyped<CalendarPlusOutlineProps, CalendarPlusOutlineEvents, CalendarPlusOutlineSlots> {
}
export {};
