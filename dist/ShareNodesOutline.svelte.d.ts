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
export type ShareNodesOutlineProps = typeof __propDef.props;
export type ShareNodesOutlineEvents = typeof __propDef.events;
export type ShareNodesOutlineSlots = typeof __propDef.slots;
export default class ShareNodesOutline extends SvelteComponentTyped<ShareNodesOutlineProps, ShareNodesOutlineEvents, ShareNodesOutlineSlots> {
}
export {};
