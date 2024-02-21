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
export type TruckOutlineProps = typeof __propDef.props;
export type TruckOutlineEvents = typeof __propDef.events;
export type TruckOutlineSlots = typeof __propDef.slots;
export default class TruckOutline extends SvelteComponentTyped<TruckOutlineProps, TruckOutlineEvents, TruckOutlineSlots> {
}
export {};
