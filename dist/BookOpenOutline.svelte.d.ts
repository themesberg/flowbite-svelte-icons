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
export type BookOpenOutlineProps = typeof __propDef.props;
export type BookOpenOutlineEvents = typeof __propDef.events;
export type BookOpenOutlineSlots = typeof __propDef.slots;
export default class BookOpenOutline extends SvelteComponentTyped<BookOpenOutlineProps, BookOpenOutlineEvents, BookOpenOutlineSlots> {
}
export {};
