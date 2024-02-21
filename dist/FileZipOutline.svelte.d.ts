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
export type FileZipOutlineProps = typeof __propDef.props;
export type FileZipOutlineEvents = typeof __propDef.events;
export type FileZipOutlineSlots = typeof __propDef.slots;
export default class FileZipOutline extends SvelteComponentTyped<FileZipOutlineProps, FileZipOutlineEvents, FileZipOutlineSlots> {
}
export {};
