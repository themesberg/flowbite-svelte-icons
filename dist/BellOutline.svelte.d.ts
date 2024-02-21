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
export type BellOutlineProps = typeof __propDef.props;
export type BellOutlineEvents = typeof __propDef.events;
export type BellOutlineSlots = typeof __propDef.slots;
export default class BellOutline extends SvelteComponentTyped<BellOutlineProps, BellOutlineEvents, BellOutlineSlots> {
}
export {};
