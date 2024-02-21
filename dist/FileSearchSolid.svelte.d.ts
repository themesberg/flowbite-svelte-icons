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
export type FileSearchSolidProps = typeof __propDef.props;
export type FileSearchSolidEvents = typeof __propDef.events;
export type FileSearchSolidSlots = typeof __propDef.slots;
export default class FileSearchSolid extends SvelteComponentTyped<FileSearchSolidProps, FileSearchSolidEvents, FileSearchSolidSlots> {
}
export {};
