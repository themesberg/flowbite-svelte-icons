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
export type LetterBoldOutlineProps = typeof __propDef.props;
export type LetterBoldOutlineEvents = typeof __propDef.events;
export type LetterBoldOutlineSlots = typeof __propDef.slots;
export default class LetterBoldOutline extends SvelteComponentTyped<LetterBoldOutlineProps, LetterBoldOutlineEvents, LetterBoldOutlineSlots> {
}
export {};
