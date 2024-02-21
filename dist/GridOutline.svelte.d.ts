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
export type GridOutlineProps = typeof __propDef.props;
export type GridOutlineEvents = typeof __propDef.events;
export type GridOutlineSlots = typeof __propDef.slots;
export default class GridOutline extends SvelteComponentTyped<GridOutlineProps, GridOutlineEvents, GridOutlineSlots> {
}
export {};
