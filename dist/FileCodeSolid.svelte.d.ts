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
export type FileCodeSolidProps = typeof __propDef.props;
export type FileCodeSolidEvents = typeof __propDef.events;
export type FileCodeSolidSlots = typeof __propDef.slots;
export default class FileCodeSolid extends SvelteComponentTyped<FileCodeSolidProps, FileCodeSolidEvents, FileCodeSolidSlots> {
}
export {};
