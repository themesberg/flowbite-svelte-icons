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
export type GlobeOutlineProps = typeof __propDef.props;
export type GlobeOutlineEvents = typeof __propDef.events;
export type GlobeOutlineSlots = typeof __propDef.slots;
export default class GlobeOutline extends SvelteComponentTyped<GlobeOutlineProps, GlobeOutlineEvents, GlobeOutlineSlots> {
}
export {};
