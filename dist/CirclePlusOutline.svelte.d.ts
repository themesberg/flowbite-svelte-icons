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
export type CirclePlusOutlineProps = typeof __propDef.props;
export type CirclePlusOutlineEvents = typeof __propDef.events;
export type CirclePlusOutlineSlots = typeof __propDef.slots;
export default class CirclePlusOutline extends SvelteComponentTyped<CirclePlusOutlineProps, CirclePlusOutlineEvents, CirclePlusOutlineSlots> {
}
export {};
