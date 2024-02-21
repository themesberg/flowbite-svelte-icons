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
export type MapPinSolidProps = typeof __propDef.props;
export type MapPinSolidEvents = typeof __propDef.events;
export type MapPinSolidSlots = typeof __propDef.slots;
export default class MapPinSolid extends SvelteComponentTyped<MapPinSolidProps, MapPinSolidEvents, MapPinSolidSlots> {
}
export {};
