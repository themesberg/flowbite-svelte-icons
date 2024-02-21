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
export type ThumbsUpOutlineProps = typeof __propDef.props;
export type ThumbsUpOutlineEvents = typeof __propDef.events;
export type ThumbsUpOutlineSlots = typeof __propDef.slots;
export default class ThumbsUpOutline extends SvelteComponentTyped<ThumbsUpOutlineProps, ThumbsUpOutlineEvents, ThumbsUpOutlineSlots> {
}
export {};
