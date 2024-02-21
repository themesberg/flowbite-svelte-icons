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
export type FileWordSolidProps = typeof __propDef.props;
export type FileWordSolidEvents = typeof __propDef.events;
export type FileWordSolidSlots = typeof __propDef.slots;
export default class FileWordSolid extends SvelteComponentTyped<FileWordSolidProps, FileWordSolidEvents, FileWordSolidSlots> {
}
export {};
