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
export type FileImageOutlineProps = typeof __propDef.props;
export type FileImageOutlineEvents = typeof __propDef.events;
export type FileImageOutlineSlots = typeof __propDef.slots;
export default class FileImageOutline extends SvelteComponentTyped<FileImageOutlineProps, FileImageOutlineEvents, FileImageOutlineSlots> {
}
export {};
