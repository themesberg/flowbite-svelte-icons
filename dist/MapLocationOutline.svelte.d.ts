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
export type MapLocationOutlineProps = typeof __propDef.props;
export type MapLocationOutlineEvents = typeof __propDef.events;
export type MapLocationOutlineSlots = typeof __propDef.slots;
export default class MapLocationOutline extends SvelteComponentTyped<MapLocationOutlineProps, MapLocationOutlineEvents, MapLocationOutlineSlots> {
}
export {};
