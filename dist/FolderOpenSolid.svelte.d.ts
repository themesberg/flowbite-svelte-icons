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
export type FolderOpenSolidProps = typeof __propDef.props;
export type FolderOpenSolidEvents = typeof __propDef.events;
export type FolderOpenSolidSlots = typeof __propDef.slots;
export default class FolderOpenSolid extends SvelteComponentTyped<FolderOpenSolidProps, FolderOpenSolidEvents, FolderOpenSolidSlots> {
}
export {};
