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
export type CaptioningOutlineProps = typeof __propDef.props;
export type CaptioningOutlineEvents = typeof __propDef.events;
export type CaptioningOutlineSlots = typeof __propDef.slots;
export default class CaptioningOutline extends SvelteComponentTyped<CaptioningOutlineProps, CaptioningOutlineEvents, CaptioningOutlineSlots> {
}
export {};
