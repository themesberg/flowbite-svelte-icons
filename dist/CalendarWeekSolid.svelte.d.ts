import { SvelteComponent } from "svelte";
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
export type CalendarWeekSolidProps = typeof __propDef.props;
export type CalendarWeekSolidEvents = typeof __propDef.events;
export type CalendarWeekSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'calendar week solid,';
 */
export default class CalendarWeekSolid extends SvelteComponent<CalendarWeekSolidProps, CalendarWeekSolidEvents, CalendarWeekSolidSlots> {
}
export {};
