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
export type FileSearchOutlineProps = typeof __propDef.props;
export type FileSearchOutlineEvents = typeof __propDef.events;
export type FileSearchOutlineSlots = typeof __propDef.slots;
export default class FileSearchOutline extends SvelteComponentTyped<FileSearchOutlineProps, FileSearchOutlineEvents, FileSearchOutlineSlots> {
}
export {};
