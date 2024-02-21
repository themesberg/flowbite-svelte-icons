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
export type TextSizeOutlineProps = typeof __propDef.props;
export type TextSizeOutlineEvents = typeof __propDef.events;
export type TextSizeOutlineSlots = typeof __propDef.slots;
export default class TextSizeOutline extends SvelteComponentTyped<TextSizeOutlineProps, TextSizeOutlineEvents, TextSizeOutlineSlots> {
}
export {};
