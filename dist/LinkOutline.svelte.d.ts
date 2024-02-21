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
export type LinkOutlineProps = typeof __propDef.props;
export type LinkOutlineEvents = typeof __propDef.events;
export type LinkOutlineSlots = typeof __propDef.slots;
export default class LinkOutline extends SvelteComponentTyped<LinkOutlineProps, LinkOutlineEvents, LinkOutlineSlots> {
}
export {};
