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
export type FileExportOutlineProps = typeof __propDef.props;
export type FileExportOutlineEvents = typeof __propDef.events;
export type FileExportOutlineSlots = typeof __propDef.slots;
export default class FileExportOutline extends SvelteComponentTyped<FileExportOutlineProps, FileExportOutlineEvents, FileExportOutlineSlots> {
}
export {};
