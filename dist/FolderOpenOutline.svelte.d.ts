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
export type FolderOpenOutlineProps = typeof __propDef.props;
export type FolderOpenOutlineEvents = typeof __propDef.events;
export type FolderOpenOutlineSlots = typeof __propDef.slots;
export default class FolderOpenOutline extends SvelteComponentTyped<FolderOpenOutlineProps, FolderOpenOutlineEvents, FolderOpenOutlineSlots> {
}
export {};
