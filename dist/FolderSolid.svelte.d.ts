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
export type FolderSolidProps = typeof __propDef.props;
export type FolderSolidEvents = typeof __propDef.events;
export type FolderSolidSlots = typeof __propDef.slots;
export default class FolderSolid extends SvelteComponentTyped<FolderSolidProps, FolderSolidEvents, FolderSolidSlots> {
}
export {};
