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
export type BugOutlineProps = typeof __propDef.props;
export type BugOutlineEvents = typeof __propDef.events;
export type BugOutlineSlots = typeof __propDef.slots;
export default class BugOutline extends SvelteComponentTyped<BugOutlineProps, BugOutlineEvents, BugOutlineSlots> {
}
export {};
