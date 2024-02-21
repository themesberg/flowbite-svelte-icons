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
export type GridSolidProps = typeof __propDef.props;
export type GridSolidEvents = typeof __propDef.events;
export type GridSolidSlots = typeof __propDef.slots;
export default class GridSolid extends SvelteComponentTyped<GridSolidProps, GridSolidEvents, GridSolidSlots> {
}
export {};
