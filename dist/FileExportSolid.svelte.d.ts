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
export type FileExportSolidProps = typeof __propDef.props;
export type FileExportSolidEvents = typeof __propDef.events;
export type FileExportSolidSlots = typeof __propDef.slots;
export default class FileExportSolid extends SvelteComponentTyped<FileExportSolidProps, FileExportSolidEvents, FileExportSolidSlots> {
}
export {};
