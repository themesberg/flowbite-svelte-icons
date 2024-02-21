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
export type FileCirclePlusOutlineProps = typeof __propDef.props;
export type FileCirclePlusOutlineEvents = typeof __propDef.events;
export type FileCirclePlusOutlineSlots = typeof __propDef.slots;
export default class FileCirclePlusOutline extends SvelteComponentTyped<FileCirclePlusOutlineProps, FileCirclePlusOutlineEvents, FileCirclePlusOutlineSlots> {
}
export {};
