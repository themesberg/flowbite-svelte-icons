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
export type ShareAllOutlineProps = typeof __propDef.props;
export type ShareAllOutlineEvents = typeof __propDef.events;
export type ShareAllOutlineSlots = typeof __propDef.slots;
export default class ShareAllOutline extends SvelteComponentTyped<ShareAllOutlineProps, ShareAllOutlineEvents, ShareAllOutlineSlots> {
}
export {};
