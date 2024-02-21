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
export type FileCodeOutlineProps = typeof __propDef.props;
export type FileCodeOutlineEvents = typeof __propDef.events;
export type FileCodeOutlineSlots = typeof __propDef.slots;
export default class FileCodeOutline extends SvelteComponentTyped<FileCodeOutlineProps, FileCodeOutlineEvents, FileCodeOutlineSlots> {
}
export {};
