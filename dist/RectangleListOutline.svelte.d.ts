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
export type RectangleListOutlineProps = typeof __propDef.props;
export type RectangleListOutlineEvents = typeof __propDef.events;
export type RectangleListOutlineSlots = typeof __propDef.slots;
export default class RectangleListOutline extends SvelteComponentTyped<RectangleListOutlineProps, RectangleListOutlineEvents, RectangleListOutlineSlots> {
}
export {};
