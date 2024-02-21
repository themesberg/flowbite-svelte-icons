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
export type LetterUnderlineSolidProps = typeof __propDef.props;
export type LetterUnderlineSolidEvents = typeof __propDef.events;
export type LetterUnderlineSolidSlots = typeof __propDef.slots;
export default class LetterUnderlineSolid extends SvelteComponentTyped<LetterUnderlineSolidProps, LetterUnderlineSolidEvents, LetterUnderlineSolidSlots> {
}
export {};
