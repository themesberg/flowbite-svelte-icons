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
export type ArrowsRepeatOutlineProps = typeof __propDef.props;
export type ArrowsRepeatOutlineEvents = typeof __propDef.events;
export type ArrowsRepeatOutlineSlots = typeof __propDef.slots;
export default class ArrowsRepeatOutline extends SvelteComponentTyped<ArrowsRepeatOutlineProps, ArrowsRepeatOutlineEvents, ArrowsRepeatOutlineSlots> {
}
export {};
