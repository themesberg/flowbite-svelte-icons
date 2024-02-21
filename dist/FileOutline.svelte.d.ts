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
export type FileOutlineProps = typeof __propDef.props;
export type FileOutlineEvents = typeof __propDef.events;
export type FileOutlineSlots = typeof __propDef.slots;
export default class FileOutline extends SvelteComponentTyped<FileOutlineProps, FileOutlineEvents, FileOutlineSlots> {
}
export {};
