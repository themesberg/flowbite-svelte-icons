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
export type InboxFullOutlineProps = typeof __propDef.props;
export type InboxFullOutlineEvents = typeof __propDef.events;
export type InboxFullOutlineSlots = typeof __propDef.slots;
export default class InboxFullOutline extends SvelteComponentTyped<InboxFullOutlineProps, InboxFullOutlineEvents, InboxFullOutlineSlots> {
}
export {};
