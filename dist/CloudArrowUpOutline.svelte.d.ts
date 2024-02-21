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
export type CloudArrowUpOutlineProps = typeof __propDef.props;
export type CloudArrowUpOutlineEvents = typeof __propDef.events;
export type CloudArrowUpOutlineSlots = typeof __propDef.slots;
export default class CloudArrowUpOutline extends SvelteComponentTyped<CloudArrowUpOutlineProps, CloudArrowUpOutlineEvents, CloudArrowUpOutlineSlots> {
}
export {};
