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
export type DotsVerticalOutlineProps = typeof __propDef.props;
export type DotsVerticalOutlineEvents = typeof __propDef.events;
export type DotsVerticalOutlineSlots = typeof __propDef.slots;
export default class DotsVerticalOutline extends SvelteComponentTyped<DotsVerticalOutlineProps, DotsVerticalOutlineEvents, DotsVerticalOutlineSlots> {
}
export {};
