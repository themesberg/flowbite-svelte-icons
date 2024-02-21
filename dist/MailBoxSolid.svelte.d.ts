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
export type MailBoxSolidProps = typeof __propDef.props;
export type MailBoxSolidEvents = typeof __propDef.events;
export type MailBoxSolidSlots = typeof __propDef.slots;
export default class MailBoxSolid extends SvelteComponentTyped<MailBoxSolidProps, MailBoxSolidEvents, MailBoxSolidSlots> {
}
export {};
