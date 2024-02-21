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
export type ExpandOutlineProps = typeof __propDef.props;
export type ExpandOutlineEvents = typeof __propDef.events;
export type ExpandOutlineSlots = typeof __propDef.slots;
export default class ExpandOutline extends SvelteComponentTyped<ExpandOutlineProps, ExpandOutlineEvents, ExpandOutlineSlots> {
}
export {};
