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
export type ChevronRightOutlineProps = typeof __propDef.props;
export type ChevronRightOutlineEvents = typeof __propDef.events;
export type ChevronRightOutlineSlots = typeof __propDef.slots;
export default class ChevronRightOutline extends SvelteComponentTyped<ChevronRightOutlineProps, ChevronRightOutlineEvents, ChevronRightOutlineSlots> {
}
export {};
