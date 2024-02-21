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
export type InboxSolidProps = typeof __propDef.props;
export type InboxSolidEvents = typeof __propDef.events;
export type InboxSolidSlots = typeof __propDef.slots;
export default class InboxSolid extends SvelteComponentTyped<InboxSolidProps, InboxSolidEvents, InboxSolidSlots> {
}
export {};
