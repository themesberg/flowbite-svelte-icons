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
export type ParagraphOutlineProps = typeof __propDef.props;
export type ParagraphOutlineEvents = typeof __propDef.events;
export type ParagraphOutlineSlots = typeof __propDef.slots;
export default class ParagraphOutline extends SvelteComponentTyped<ParagraphOutlineProps, ParagraphOutlineEvents, ParagraphOutlineSlots> {
}
export {};
