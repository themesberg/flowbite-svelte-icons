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
export type FileShieldOutlineProps = typeof __propDef.props;
export type FileShieldOutlineEvents = typeof __propDef.events;
export type FileShieldOutlineSlots = typeof __propDef.slots;
export default class FileShieldOutline extends SvelteComponentTyped<FileShieldOutlineProps, FileShieldOutlineEvents, FileShieldOutlineSlots> {
}
export {};
