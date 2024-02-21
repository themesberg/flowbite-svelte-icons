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
export type SunOutlineProps = typeof __propDef.props;
export type SunOutlineEvents = typeof __propDef.events;
export type SunOutlineSlots = typeof __propDef.slots;
export default class SunOutline extends SvelteComponentTyped<SunOutlineProps, SunOutlineEvents, SunOutlineSlots> {
}
export {};
