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
export type MinimizeOutlineProps = typeof __propDef.props;
export type MinimizeOutlineEvents = typeof __propDef.events;
export type MinimizeOutlineSlots = typeof __propDef.slots;
export default class MinimizeOutline extends SvelteComponentTyped<MinimizeOutlineProps, MinimizeOutlineEvents, MinimizeOutlineSlots> {
}
export {};
