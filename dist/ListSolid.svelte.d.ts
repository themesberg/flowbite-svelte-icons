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
export type ListSolidProps = typeof __propDef.props;
export type ListSolidEvents = typeof __propDef.events;
export type ListSolidSlots = typeof __propDef.slots;
export default class ListSolid extends SvelteComponentTyped<ListSolidProps, ListSolidEvents, ListSolidSlots> {
}
export {};
