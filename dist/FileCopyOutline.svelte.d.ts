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
export type FileCopyOutlineProps = typeof __propDef.props;
export type FileCopyOutlineEvents = typeof __propDef.events;
export type FileCopyOutlineSlots = typeof __propDef.slots;
export default class FileCopyOutline extends SvelteComponentTyped<FileCopyOutlineProps, FileCopyOutlineEvents, FileCopyOutlineSlots> {
}
export {};
