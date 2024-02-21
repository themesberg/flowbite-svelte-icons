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
export type LetterBoldSolidProps = typeof __propDef.props;
export type LetterBoldSolidEvents = typeof __propDef.events;
export type LetterBoldSolidSlots = typeof __propDef.slots;
export default class LetterBoldSolid extends SvelteComponentTyped<LetterBoldSolidProps, LetterBoldSolidEvents, LetterBoldSolidSlots> {
}
export {};
