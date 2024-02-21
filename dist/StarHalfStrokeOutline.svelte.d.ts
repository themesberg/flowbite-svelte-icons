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
export type StarHalfStrokeOutlineProps = typeof __propDef.props;
export type StarHalfStrokeOutlineEvents = typeof __propDef.events;
export type StarHalfStrokeOutlineSlots = typeof __propDef.slots;
export default class StarHalfStrokeOutline extends SvelteComponentTyped<StarHalfStrokeOutlineProps, StarHalfStrokeOutlineEvents, StarHalfStrokeOutlineSlots> {
}
export {};
