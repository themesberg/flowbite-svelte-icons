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
export type ChevronDownOutlineProps = typeof __propDef.props;
export type ChevronDownOutlineEvents = typeof __propDef.events;
export type ChevronDownOutlineSlots = typeof __propDef.slots;
export default class ChevronDownOutline extends SvelteComponentTyped<ChevronDownOutlineProps, ChevronDownOutlineEvents, ChevronDownOutlineSlots> {
}
export {};
