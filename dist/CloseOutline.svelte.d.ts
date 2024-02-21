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
export type CloseOutlineProps = typeof __propDef.props;
export type CloseOutlineEvents = typeof __propDef.events;
export type CloseOutlineSlots = typeof __propDef.slots;
export default class CloseOutline extends SvelteComponentTyped<CloseOutlineProps, CloseOutlineEvents, CloseOutlineSlots> {
}
export {};
