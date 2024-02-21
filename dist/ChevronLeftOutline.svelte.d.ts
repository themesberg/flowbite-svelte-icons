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
export type ChevronLeftOutlineProps = typeof __propDef.props;
export type ChevronLeftOutlineEvents = typeof __propDef.events;
export type ChevronLeftOutlineSlots = typeof __propDef.slots;
export default class ChevronLeftOutline extends SvelteComponentTyped<ChevronLeftOutlineProps, ChevronLeftOutlineEvents, ChevronLeftOutlineSlots> {
}
export {};
