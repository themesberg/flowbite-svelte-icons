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
export type TagSolidProps = typeof __propDef.props;
export type TagSolidEvents = typeof __propDef.events;
export type TagSolidSlots = typeof __propDef.slots;
export default class TagSolid extends SvelteComponentTyped<TagSolidProps, TagSolidEvents, TagSolidSlots> {
}
export {};
