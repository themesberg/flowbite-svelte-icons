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
export type BookSolidProps = typeof __propDef.props;
export type BookSolidEvents = typeof __propDef.events;
export type BookSolidSlots = typeof __propDef.slots;
export default class BookSolid extends SvelteComponentTyped<BookSolidProps, BookSolidEvents, BookSolidSlots> {
}
export {};
