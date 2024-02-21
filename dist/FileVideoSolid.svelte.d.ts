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
export type FileVideoSolidProps = typeof __propDef.props;
export type FileVideoSolidEvents = typeof __propDef.events;
export type FileVideoSolidSlots = typeof __propDef.slots;
export default class FileVideoSolid extends SvelteComponentTyped<FileVideoSolidProps, FileVideoSolidEvents, FileVideoSolidSlots> {
}
export {};
