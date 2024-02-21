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
export type FolderDuplicateOutlineProps = typeof __propDef.props;
export type FolderDuplicateOutlineEvents = typeof __propDef.events;
export type FolderDuplicateOutlineSlots = typeof __propDef.slots;
export default class FolderDuplicateOutline extends SvelteComponentTyped<FolderDuplicateOutlineProps, FolderDuplicateOutlineEvents, FolderDuplicateOutlineSlots> {
}
export {};
