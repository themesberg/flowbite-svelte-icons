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
export type LetterItalicOutlineProps = typeof __propDef.props;
export type LetterItalicOutlineEvents = typeof __propDef.events;
export type LetterItalicOutlineSlots = typeof __propDef.slots;
export default class LetterItalicOutline extends SvelteComponentTyped<LetterItalicOutlineProps, LetterItalicOutlineEvents, LetterItalicOutlineSlots> {
}
export {};
