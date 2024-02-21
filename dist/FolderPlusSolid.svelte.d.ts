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
export type FolderPlusSolidProps = typeof __propDef.props;
export type FolderPlusSolidEvents = typeof __propDef.events;
export type FolderPlusSolidSlots = typeof __propDef.slots;
export default class FolderPlusSolid extends SvelteComponentTyped<FolderPlusSolidProps, FolderPlusSolidEvents, FolderPlusSolidSlots> {
}
export {};
