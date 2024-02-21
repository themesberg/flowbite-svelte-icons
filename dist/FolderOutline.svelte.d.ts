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
export type FolderOutlineProps = typeof __propDef.props;
export type FolderOutlineEvents = typeof __propDef.events;
export type FolderOutlineSlots = typeof __propDef.slots;
export default class FolderOutline extends SvelteComponentTyped<FolderOutlineProps, FolderOutlineEvents, FolderOutlineSlots> {
}
export {};
