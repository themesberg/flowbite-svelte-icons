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
export type FileCheckSolidProps = typeof __propDef.props;
export type FileCheckSolidEvents = typeof __propDef.events;
export type FileCheckSolidSlots = typeof __propDef.slots;
export default class FileCheckSolid extends SvelteComponentTyped<FileCheckSolidProps, FileCheckSolidEvents, FileCheckSolidSlots> {
}
export {};
