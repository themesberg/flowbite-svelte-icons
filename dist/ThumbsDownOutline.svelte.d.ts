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
export type ThumbsDownOutlineProps = typeof __propDef.props;
export type ThumbsDownOutlineEvents = typeof __propDef.events;
export type ThumbsDownOutlineSlots = typeof __propDef.slots;
export default class ThumbsDownOutline extends SvelteComponentTyped<ThumbsDownOutlineProps, ThumbsDownOutlineEvents, ThumbsDownOutlineSlots> {
}
export {};
