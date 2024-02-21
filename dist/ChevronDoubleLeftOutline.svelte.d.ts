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
export type ChevronDoubleLeftOutlineProps = typeof __propDef.props;
export type ChevronDoubleLeftOutlineEvents = typeof __propDef.events;
export type ChevronDoubleLeftOutlineSlots = typeof __propDef.slots;
export default class ChevronDoubleLeftOutline extends SvelteComponentTyped<ChevronDoubleLeftOutlineProps, ChevronDoubleLeftOutlineEvents, ChevronDoubleLeftOutlineSlots> {
}
export {};
