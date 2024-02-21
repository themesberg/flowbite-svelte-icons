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
export type FileLinesOutlineProps = typeof __propDef.props;
export type FileLinesOutlineEvents = typeof __propDef.events;
export type FileLinesOutlineSlots = typeof __propDef.slots;
export default class FileLinesOutline extends SvelteComponentTyped<FileLinesOutlineProps, FileLinesOutlineEvents, FileLinesOutlineSlots> {
}
export {};
