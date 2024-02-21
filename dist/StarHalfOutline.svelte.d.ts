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
export type StarHalfOutlineProps = typeof __propDef.props;
export type StarHalfOutlineEvents = typeof __propDef.events;
export type StarHalfOutlineSlots = typeof __propDef.slots;
export default class StarHalfOutline extends SvelteComponentTyped<StarHalfOutlineProps, StarHalfOutlineEvents, StarHalfOutlineSlots> {
}
export {};
