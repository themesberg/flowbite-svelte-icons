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
export type FileVideoOutlineProps = typeof __propDef.props;
export type FileVideoOutlineEvents = typeof __propDef.events;
export type FileVideoOutlineSlots = typeof __propDef.slots;
export default class FileVideoOutline extends SvelteComponentTyped<FileVideoOutlineProps, FileVideoOutlineEvents, FileVideoOutlineSlots> {
}
export {};
