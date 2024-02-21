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
export type BellRingOutlineProps = typeof __propDef.props;
export type BellRingOutlineEvents = typeof __propDef.events;
export type BellRingOutlineSlots = typeof __propDef.slots;
export default class BellRingOutline extends SvelteComponentTyped<BellRingOutlineProps, BellRingOutlineEvents, BellRingOutlineSlots> {
}
export {};
