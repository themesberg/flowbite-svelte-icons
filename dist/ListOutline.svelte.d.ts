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
export type ListOutlineProps = typeof __propDef.props;
export type ListOutlineEvents = typeof __propDef.events;
export type ListOutlineSlots = typeof __propDef.slots;
export default class ListOutline extends SvelteComponentTyped<ListOutlineProps, ListOutlineEvents, ListOutlineSlots> {
}
export {};
