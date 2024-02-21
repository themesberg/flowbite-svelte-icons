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
export type LifeSaverSolidProps = typeof __propDef.props;
export type LifeSaverSolidEvents = typeof __propDef.events;
export type LifeSaverSolidSlots = typeof __propDef.slots;
export default class LifeSaverSolid extends SvelteComponentTyped<LifeSaverSolidProps, LifeSaverSolidEvents, LifeSaverSolidSlots> {
}
export {};
