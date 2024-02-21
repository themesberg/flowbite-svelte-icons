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
export type FileCloneOutlineProps = typeof __propDef.props;
export type FileCloneOutlineEvents = typeof __propDef.events;
export type FileCloneOutlineSlots = typeof __propDef.slots;
export default class FileCloneOutline extends SvelteComponentTyped<FileCloneOutlineProps, FileCloneOutlineEvents, FileCloneOutlineSlots> {
}
export {};
