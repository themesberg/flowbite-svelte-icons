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
export type GridPlusSolidProps = typeof __propDef.props;
export type GridPlusSolidEvents = typeof __propDef.events;
export type GridPlusSolidSlots = typeof __propDef.slots;
export default class GridPlusSolid extends SvelteComponentTyped<GridPlusSolidProps, GridPlusSolidEvents, GridPlusSolidSlots> {
}
export {};
