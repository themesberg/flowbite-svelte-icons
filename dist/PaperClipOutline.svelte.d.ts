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
export type PaperClipOutlineProps = typeof __propDef.props;
export type PaperClipOutlineEvents = typeof __propDef.events;
export type PaperClipOutlineSlots = typeof __propDef.slots;
export default class PaperClipOutline extends SvelteComponentTyped<PaperClipOutlineProps, PaperClipOutlineEvents, PaperClipOutlineSlots> {
}
export {};
