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
export type MessagesOutlineProps = typeof __propDef.props;
export type MessagesOutlineEvents = typeof __propDef.events;
export type MessagesOutlineSlots = typeof __propDef.slots;
export default class MessagesOutline extends SvelteComponentTyped<MessagesOutlineProps, MessagesOutlineEvents, MessagesOutlineSlots> {
}
export {};
