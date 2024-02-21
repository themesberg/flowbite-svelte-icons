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
export type MagicWandOutlineProps = typeof __propDef.props;
export type MagicWandOutlineEvents = typeof __propDef.events;
export type MagicWandOutlineSlots = typeof __propDef.slots;
export default class MagicWandOutline extends SvelteComponentTyped<MagicWandOutlineProps, MagicWandOutlineEvents, MagicWandOutlineSlots> {
}
export {};
