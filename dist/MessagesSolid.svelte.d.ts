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
export type MessagesSolidProps = typeof __propDef.props;
export type MessagesSolidEvents = typeof __propDef.events;
export type MessagesSolidSlots = typeof __propDef.slots;
export default class MessagesSolid extends SvelteComponentTyped<MessagesSolidProps, MessagesSolidEvents, MessagesSolidSlots> {
}
export {};
