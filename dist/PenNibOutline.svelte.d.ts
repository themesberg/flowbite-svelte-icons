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
export type PenNibOutlineProps = typeof __propDef.props;
export type PenNibOutlineEvents = typeof __propDef.events;
export type PenNibOutlineSlots = typeof __propDef.slots;
export default class PenNibOutline extends SvelteComponentTyped<PenNibOutlineProps, PenNibOutlineEvents, PenNibOutlineSlots> {
}
export {};
