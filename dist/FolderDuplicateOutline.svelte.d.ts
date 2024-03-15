import { SvelteComponent } from "svelte";
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
export type FolderDuplicateOutlineProps = typeof __propDef.props;
export type FolderDuplicateOutlineEvents = typeof __propDef.events;
export type FolderDuplicateOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?: "xs" | "sm" | "md" | "lg" | "xl";
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class FolderDuplicateOutline extends SvelteComponent<FolderDuplicateOutlineProps, FolderDuplicateOutlineEvents, FolderDuplicateOutlineSlots> {
}
export {};
