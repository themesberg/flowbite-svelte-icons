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
export type LifeSaverOutlineProps = typeof __propDef.props;
export type LifeSaverOutlineEvents = typeof __propDef.events;
export type LifeSaverOutlineSlots = typeof __propDef.slots;
export default class LifeSaverOutline extends SvelteComponentTyped<LifeSaverOutlineProps, LifeSaverOutlineEvents, LifeSaverOutlineSlots> {
}
export {};
