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
export type ParagraphSolidProps = typeof __propDef.props;
export type ParagraphSolidEvents = typeof __propDef.events;
export type ParagraphSolidSlots = typeof __propDef.slots;
export default class ParagraphSolid extends SvelteComponentTyped<ParagraphSolidProps, ParagraphSolidEvents, ParagraphSolidSlots> {
}
export {};
