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
export type FilePenOutlineProps = typeof __propDef.props;
export type FilePenOutlineEvents = typeof __propDef.events;
export type FilePenOutlineSlots = typeof __propDef.slots;
export default class FilePenOutline extends SvelteComponentTyped<FilePenOutlineProps, FilePenOutlineEvents, FilePenOutlineSlots> {
}
export {};
