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
export type TagOutlineProps = typeof __propDef.props;
export type TagOutlineEvents = typeof __propDef.events;
export type TagOutlineSlots = typeof __propDef.slots;
export default class TagOutline extends SvelteComponentTyped<TagOutlineProps, TagOutlineEvents, TagOutlineSlots> {
}
export {};
