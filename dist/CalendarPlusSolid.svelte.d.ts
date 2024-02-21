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
export type CalendarPlusSolidProps = typeof __propDef.props;
export type CalendarPlusSolidEvents = typeof __propDef.events;
export type CalendarPlusSolidSlots = typeof __propDef.slots;
export default class CalendarPlusSolid extends SvelteComponentTyped<CalendarPlusSolidProps, CalendarPlusSolidEvents, CalendarPlusSolidSlots> {
}
export {};
