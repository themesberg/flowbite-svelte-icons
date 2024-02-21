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
export type ClipboardListOutlineProps = typeof __propDef.props;
export type ClipboardListOutlineEvents = typeof __propDef.events;
export type ClipboardListOutlineSlots = typeof __propDef.slots;
export default class ClipboardListOutline extends SvelteComponentTyped<ClipboardListOutlineProps, ClipboardListOutlineEvents, ClipboardListOutlineSlots> {
}
export {};
