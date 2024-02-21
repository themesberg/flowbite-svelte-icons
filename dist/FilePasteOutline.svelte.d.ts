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
export type FilePasteOutlineProps = typeof __propDef.props;
export type FilePasteOutlineEvents = typeof __propDef.events;
export type FilePasteOutlineSlots = typeof __propDef.slots;
export default class FilePasteOutline extends SvelteComponentTyped<FilePasteOutlineProps, FilePasteOutlineEvents, FilePasteOutlineSlots> {
}
export {};
