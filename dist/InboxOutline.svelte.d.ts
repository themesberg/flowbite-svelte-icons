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
export type InboxOutlineProps = typeof __propDef.props;
export type InboxOutlineEvents = typeof __propDef.events;
export type InboxOutlineSlots = typeof __propDef.slots;
export default class InboxOutline extends SvelteComponentTyped<InboxOutlineProps, InboxOutlineEvents, InboxOutlineSlots> {
}
export {};
