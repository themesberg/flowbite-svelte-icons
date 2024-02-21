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
export type MailBoxOutlineProps = typeof __propDef.props;
export type MailBoxOutlineEvents = typeof __propDef.events;
export type MailBoxOutlineSlots = typeof __propDef.slots;
export default class MailBoxOutline extends SvelteComponentTyped<MailBoxOutlineProps, MailBoxOutlineEvents, MailBoxOutlineSlots> {
}
export {};
