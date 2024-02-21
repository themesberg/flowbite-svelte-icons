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
export type LetterUnderlineOutlineProps = typeof __propDef.props;
export type LetterUnderlineOutlineEvents = typeof __propDef.events;
export type LetterUnderlineOutlineSlots = typeof __propDef.slots;
export default class LetterUnderlineOutline extends SvelteComponentTyped<LetterUnderlineOutlineProps, LetterUnderlineOutlineEvents, LetterUnderlineOutlineSlots> {
}
export {};
