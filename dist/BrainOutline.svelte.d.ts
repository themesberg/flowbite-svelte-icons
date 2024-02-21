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
export type BrainOutlineProps = typeof __propDef.props;
export type BrainOutlineEvents = typeof __propDef.events;
export type BrainOutlineSlots = typeof __propDef.slots;
export default class BrainOutline extends SvelteComponentTyped<BrainOutlineProps, BrainOutlineEvents, BrainOutlineSlots> {
}
export {};
