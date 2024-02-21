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
export type LayersSolidProps = typeof __propDef.props;
export type LayersSolidEvents = typeof __propDef.events;
export type LayersSolidSlots = typeof __propDef.slots;
export default class LayersSolid extends SvelteComponentTyped<LayersSolidProps, LayersSolidEvents, LayersSolidSlots> {
}
export {};
