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
export type HourglassSolidProps = typeof __propDef.props;
export type HourglassSolidEvents = typeof __propDef.events;
export type HourglassSolidSlots = typeof __propDef.slots;
export default class HourglassSolid extends SvelteComponentTyped<HourglassSolidProps, HourglassSolidEvents, HourglassSolidSlots> {
}
export {};
