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
export type ClipboardCheckOutlineProps = typeof __propDef.props;
export type ClipboardCheckOutlineEvents = typeof __propDef.events;
export type ClipboardCheckOutlineSlots = typeof __propDef.slots;
export default class ClipboardCheckOutline extends SvelteComponentTyped<ClipboardCheckOutlineProps, ClipboardCheckOutlineEvents, ClipboardCheckOutlineSlots> {
}
export {};
