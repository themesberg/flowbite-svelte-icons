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
export type FileImportSolidProps = typeof __propDef.props;
export type FileImportSolidEvents = typeof __propDef.events;
export type FileImportSolidSlots = typeof __propDef.slots;
export default class FileImportSolid extends SvelteComponentTyped<FileImportSolidProps, FileImportSolidEvents, FileImportSolidSlots> {
}
export {};
