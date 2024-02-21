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
export type WindowOutlineProps = typeof __propDef.props;
export type WindowOutlineEvents = typeof __propDef.events;
export type WindowOutlineSlots = typeof __propDef.slots;
export default class WindowOutline extends SvelteComponentTyped<WindowOutlineProps, WindowOutlineEvents, WindowOutlineSlots> {
}
export {};
