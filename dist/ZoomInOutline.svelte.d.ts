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
export type ZoomInOutlineProps = typeof __propDef.props;
export type ZoomInOutlineEvents = typeof __propDef.events;
export type ZoomInOutlineSlots = typeof __propDef.slots;
export default class ZoomInOutline extends SvelteComponentTyped<ZoomInOutlineProps, ZoomInOutlineEvents, ZoomInOutlineSlots> {
}
export {};
