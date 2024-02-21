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
export type FileWordOutlineProps = typeof __propDef.props;
export type FileWordOutlineEvents = typeof __propDef.events;
export type FileWordOutlineSlots = typeof __propDef.slots;
export default class FileWordOutline extends SvelteComponentTyped<FileWordOutlineProps, FileWordOutlineEvents, FileWordOutlineSlots> {
}
export {};
