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
export type LayersOutlineProps = typeof __propDef.props;
export type LayersOutlineEvents = typeof __propDef.events;
export type LayersOutlineSlots = typeof __propDef.slots;
export default class LayersOutline extends SvelteComponentTyped<LayersOutlineProps, LayersOutlineEvents, LayersOutlineSlots> {
}
export {};
