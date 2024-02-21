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
export type EditOutlineProps = typeof __propDef.props;
export type EditOutlineEvents = typeof __propDef.events;
export type EditOutlineSlots = typeof __propDef.slots;
export default class EditOutline extends SvelteComponentTyped<EditOutlineProps, EditOutlineEvents, EditOutlineSlots> {
}
export {};
