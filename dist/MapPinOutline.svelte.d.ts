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
export type MapPinOutlineProps = typeof __propDef.props;
export type MapPinOutlineEvents = typeof __propDef.events;
export type MapPinOutlineSlots = typeof __propDef.slots;
export default class MapPinOutline extends SvelteComponentTyped<MapPinOutlineProps, MapPinOutlineEvents, MapPinOutlineSlots> {
}
export {};
