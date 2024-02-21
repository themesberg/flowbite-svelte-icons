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
export type DotsHorizontalOutlineProps = typeof __propDef.props;
export type DotsHorizontalOutlineEvents = typeof __propDef.events;
export type DotsHorizontalOutlineSlots = typeof __propDef.slots;
export default class DotsHorizontalOutline extends SvelteComponentTyped<DotsHorizontalOutlineProps, DotsHorizontalOutlineEvents, DotsHorizontalOutlineSlots> {
}
export {};
