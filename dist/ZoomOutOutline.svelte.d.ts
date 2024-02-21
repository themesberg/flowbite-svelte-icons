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
export type ZoomOutOutlineProps = typeof __propDef.props;
export type ZoomOutOutlineEvents = typeof __propDef.events;
export type ZoomOutOutlineSlots = typeof __propDef.slots;
export default class ZoomOutOutline extends SvelteComponentTyped<ZoomOutOutlineProps, ZoomOutOutlineEvents, ZoomOutOutlineSlots> {
}
export {};
