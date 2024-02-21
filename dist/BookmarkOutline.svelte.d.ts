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
export type BookmarkOutlineProps = typeof __propDef.props;
export type BookmarkOutlineEvents = typeof __propDef.events;
export type BookmarkOutlineSlots = typeof __propDef.slots;
export default class BookmarkOutline extends SvelteComponentTyped<BookmarkOutlineProps, BookmarkOutlineEvents, BookmarkOutlineSlots> {
}
export {};
