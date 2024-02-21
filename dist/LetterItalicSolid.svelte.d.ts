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
export type LetterItalicSolidProps = typeof __propDef.props;
export type LetterItalicSolidEvents = typeof __propDef.events;
export type LetterItalicSolidSlots = typeof __propDef.slots;
export default class LetterItalicSolid extends SvelteComponentTyped<LetterItalicSolidProps, LetterItalicSolidEvents, LetterItalicSolidSlots> {
}
export {};
