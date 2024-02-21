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
export type DrawSquareOutlineProps = typeof __propDef.props;
export type DrawSquareOutlineEvents = typeof __propDef.events;
export type DrawSquareOutlineSlots = typeof __propDef.slots;
export default class DrawSquareOutline extends SvelteComponentTyped<DrawSquareOutlineProps, DrawSquareOutlineEvents, DrawSquareOutlineSlots> {
}
export {};
