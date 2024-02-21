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
export type SearchSolidProps = typeof __propDef.props;
export type SearchSolidEvents = typeof __propDef.events;
export type SearchSolidSlots = typeof __propDef.slots;
export default class SearchSolid extends SvelteComponentTyped<SearchSolidProps, SearchSolidEvents, SearchSolidSlots> {
}
export {};
