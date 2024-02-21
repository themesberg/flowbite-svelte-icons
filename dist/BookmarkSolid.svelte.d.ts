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
export type BookmarkSolidProps = typeof __propDef.props;
export type BookmarkSolidEvents = typeof __propDef.events;
export type BookmarkSolidSlots = typeof __propDef.slots;
export default class BookmarkSolid extends SvelteComponentTyped<BookmarkSolidProps, BookmarkSolidEvents, BookmarkSolidSlots> {
}
export {};
