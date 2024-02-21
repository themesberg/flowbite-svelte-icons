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
export type SwatchbookOutlineProps = typeof __propDef.props;
export type SwatchbookOutlineEvents = typeof __propDef.events;
export type SwatchbookOutlineSlots = typeof __propDef.slots;
export default class SwatchbookOutline extends SvelteComponentTyped<SwatchbookOutlineProps, SwatchbookOutlineEvents, SwatchbookOutlineSlots> {
}
export {};
