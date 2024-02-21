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
export type FolderDuplicateSolidProps = typeof __propDef.props;
export type FolderDuplicateSolidEvents = typeof __propDef.events;
export type FolderDuplicateSolidSlots = typeof __propDef.slots;
export default class FolderDuplicateSolid extends SvelteComponentTyped<FolderDuplicateSolidProps, FolderDuplicateSolidEvents, FolderDuplicateSolidSlots> {
}
export {};
