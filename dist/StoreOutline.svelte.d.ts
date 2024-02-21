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
export type StoreOutlineProps = typeof __propDef.props;
export type StoreOutlineEvents = typeof __propDef.events;
export type StoreOutlineSlots = typeof __propDef.slots;
export default class StoreOutline extends SvelteComponentTyped<StoreOutlineProps, StoreOutlineEvents, StoreOutlineSlots> {
}
export {};
