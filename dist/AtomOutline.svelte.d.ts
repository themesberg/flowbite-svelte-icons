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
export type AtomOutlineProps = typeof __propDef.props;
export type AtomOutlineEvents = typeof __propDef.events;
export type AtomOutlineSlots = typeof __propDef.slots;
export default class AtomOutline extends SvelteComponentTyped<AtomOutlineProps, AtomOutlineEvents, AtomOutlineSlots> {
}
export {};
