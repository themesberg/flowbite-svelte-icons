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
export type FolderArrowRightSolidProps = typeof __propDef.props;
export type FolderArrowRightSolidEvents = typeof __propDef.events;
export type FolderArrowRightSolidSlots = typeof __propDef.slots;
export default class FolderArrowRightSolid extends SvelteComponentTyped<FolderArrowRightSolidProps, FolderArrowRightSolidEvents, FolderArrowRightSolidSlots> {
}
export {};
