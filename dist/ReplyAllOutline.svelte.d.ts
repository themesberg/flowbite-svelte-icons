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
export type ReplyAllOutlineProps = typeof __propDef.props;
export type ReplyAllOutlineEvents = typeof __propDef.events;
export type ReplyAllOutlineSlots = typeof __propDef.slots;
export default class ReplyAllOutline extends SvelteComponentTyped<ReplyAllOutlineProps, ReplyAllOutlineEvents, ReplyAllOutlineSlots> {
}
export {};
