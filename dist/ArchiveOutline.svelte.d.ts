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
export type ArchiveOutlineProps = typeof __propDef.props;
export type ArchiveOutlineEvents = typeof __propDef.events;
export type ArchiveOutlineSlots = typeof __propDef.slots;
export default class ArchiveOutline extends SvelteComponentTyped<ArchiveOutlineProps, ArchiveOutlineEvents, ArchiveOutlineSlots> {
}
export {};
