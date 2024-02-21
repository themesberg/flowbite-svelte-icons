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
export type ChevronDoubleRightOutlineProps = typeof __propDef.props;
export type ChevronDoubleRightOutlineEvents = typeof __propDef.events;
export type ChevronDoubleRightOutlineSlots = typeof __propDef.slots;
export default class ChevronDoubleRightOutline extends SvelteComponentTyped<ChevronDoubleRightOutlineProps, ChevronDoubleRightOutlineEvents, ChevronDoubleRightOutlineSlots> {
}
export {};
