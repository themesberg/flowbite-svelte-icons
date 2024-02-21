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
export type ChevronSortSolidProps = typeof __propDef.props;
export type ChevronSortSolidEvents = typeof __propDef.events;
export type ChevronSortSolidSlots = typeof __propDef.slots;
export default class ChevronSortSolid extends SvelteComponentTyped<ChevronSortSolidProps, ChevronSortSolidEvents, ChevronSortSolidSlots> {
}
export {};
