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
export type FileZipSolidProps = typeof __propDef.props;
export type FileZipSolidEvents = typeof __propDef.events;
export type FileZipSolidSlots = typeof __propDef.slots;
export default class FileZipSolid extends SvelteComponentTyped<FileZipSolidProps, FileZipSolidEvents, FileZipSolidSlots> {
}
export {};
