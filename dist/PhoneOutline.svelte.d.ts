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
export type PhoneOutlineProps = typeof __propDef.props;
export type PhoneOutlineEvents = typeof __propDef.events;
export type PhoneOutlineSlots = typeof __propDef.slots;
export default class PhoneOutline extends SvelteComponentTyped<PhoneOutlineProps, PhoneOutlineEvents, PhoneOutlineSlots> {
}
export {};
