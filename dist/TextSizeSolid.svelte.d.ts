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
export type TextSizeSolidProps = typeof __propDef.props;
export type TextSizeSolidEvents = typeof __propDef.events;
export type TextSizeSolidSlots = typeof __propDef.slots;
export default class TextSizeSolid extends SvelteComponentTyped<TextSizeSolidProps, TextSizeSolidEvents, TextSizeSolidSlots> {
}
export {};
