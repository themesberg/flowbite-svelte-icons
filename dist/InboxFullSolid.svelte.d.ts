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
export type InboxFullSolidProps = typeof __propDef.props;
export type InboxFullSolidEvents = typeof __propDef.events;
export type InboxFullSolidSlots = typeof __propDef.slots;
export default class InboxFullSolid extends SvelteComponentTyped<InboxFullSolidProps, InboxFullSolidEvents, InboxFullSolidSlots> {
}
export {};
