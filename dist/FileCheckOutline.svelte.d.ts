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
export type FileCheckOutlineProps = typeof __propDef.props;
export type FileCheckOutlineEvents = typeof __propDef.events;
export type FileCheckOutlineSlots = typeof __propDef.slots;
export default class FileCheckOutline extends SvelteComponentTyped<FileCheckOutlineProps, FileCheckOutlineEvents, FileCheckOutlineSlots> {
}
export {};
