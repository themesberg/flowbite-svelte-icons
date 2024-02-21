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
export type BuildingOutlineProps = typeof __propDef.props;
export type BuildingOutlineEvents = typeof __propDef.events;
export type BuildingOutlineSlots = typeof __propDef.slots;
export default class BuildingOutline extends SvelteComponentTyped<BuildingOutlineProps, BuildingOutlineEvents, BuildingOutlineSlots> {
}
export {};
