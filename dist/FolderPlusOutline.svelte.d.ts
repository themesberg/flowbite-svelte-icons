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
export type FolderPlusOutlineProps = typeof __propDef.props;
export type FolderPlusOutlineEvents = typeof __propDef.events;
export type FolderPlusOutlineSlots = typeof __propDef.slots;
export default class FolderPlusOutline extends SvelteComponentTyped<FolderPlusOutlineProps, FolderPlusOutlineEvents, FolderPlusOutlineSlots> {
}
export {};
