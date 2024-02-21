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
export type FileCsvOutlineProps = typeof __propDef.props;
export type FileCsvOutlineEvents = typeof __propDef.events;
export type FileCsvOutlineSlots = typeof __propDef.slots;
export default class FileCsvOutline extends SvelteComponentTyped<FileCsvOutlineProps, FileCsvOutlineEvents, FileCsvOutlineSlots> {
}
export {};
