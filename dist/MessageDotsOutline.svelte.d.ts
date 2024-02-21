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
export type MessageDotsOutlineProps = typeof __propDef.props;
export type MessageDotsOutlineEvents = typeof __propDef.events;
export type MessageDotsOutlineSlots = typeof __propDef.slots;
export default class MessageDotsOutline extends SvelteComponentTyped<MessageDotsOutlineProps, MessageDotsOutlineEvents, MessageDotsOutlineSlots> {
}
export {};
