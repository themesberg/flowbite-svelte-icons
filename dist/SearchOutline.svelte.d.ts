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
export type SearchOutlineProps = typeof __propDef.props;
export type SearchOutlineEvents = typeof __propDef.events;
export type SearchOutlineSlots = typeof __propDef.slots;
export default class SearchOutline extends SvelteComponentTyped<SearchOutlineProps, SearchOutlineEvents, SearchOutlineSlots> {
}
export {};
