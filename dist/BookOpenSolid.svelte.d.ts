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
export type BookOpenSolidProps = typeof __propDef.props;
export type BookOpenSolidEvents = typeof __propDef.events;
export type BookOpenSolidSlots = typeof __propDef.slots;
export default class BookOpenSolid extends SvelteComponentTyped<BookOpenSolidProps, BookOpenSolidEvents, BookOpenSolidSlots> {
}
export {};
