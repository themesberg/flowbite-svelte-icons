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
export type TabletOutlineProps = typeof __propDef.props;
export type TabletOutlineEvents = typeof __propDef.events;
export type TabletOutlineSlots = typeof __propDef.slots;
export default class TabletOutline extends SvelteComponentTyped<TabletOutlineProps, TabletOutlineEvents, TabletOutlineSlots> {
}
export {};
