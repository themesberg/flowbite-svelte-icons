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
export type FolderArrowRightOutlineProps = typeof __propDef.props;
export type FolderArrowRightOutlineEvents = typeof __propDef.events;
export type FolderArrowRightOutlineSlots = typeof __propDef.slots;
export default class FolderArrowRightOutline extends SvelteComponentTyped<FolderArrowRightOutlineProps, FolderArrowRightOutlineEvents, FolderArrowRightOutlineSlots> {
}
export {};
