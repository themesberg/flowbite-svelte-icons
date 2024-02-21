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
export type FileCopyAltOutlineProps = typeof __propDef.props;
export type FileCopyAltOutlineEvents = typeof __propDef.events;
export type FileCopyAltOutlineSlots = typeof __propDef.slots;
export default class FileCopyAltOutline extends SvelteComponentTyped<FileCopyAltOutlineProps, FileCopyAltOutlineEvents, FileCopyAltOutlineSlots> {
}
export {};
