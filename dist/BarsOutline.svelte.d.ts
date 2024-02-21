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
export type BarsOutlineProps = typeof __propDef.props;
export type BarsOutlineEvents = typeof __propDef.events;
export type BarsOutlineSlots = typeof __propDef.slots;
export default class BarsOutline extends SvelteComponentTyped<BarsOutlineProps, BarsOutlineEvents, BarsOutlineSlots> {
}
export {};
