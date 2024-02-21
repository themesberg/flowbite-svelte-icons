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
export type MessageCaptionSolidProps = typeof __propDef.props;
export type MessageCaptionSolidEvents = typeof __propDef.events;
export type MessageCaptionSolidSlots = typeof __propDef.slots;
export default class MessageCaptionSolid extends SvelteComponentTyped<MessageCaptionSolidProps, MessageCaptionSolidEvents, MessageCaptionSolidSlots> {
}
export {};
