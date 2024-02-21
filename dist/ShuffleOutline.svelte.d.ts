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
export type ShuffleOutlineProps = typeof __propDef.props;
export type ShuffleOutlineEvents = typeof __propDef.events;
export type ShuffleOutlineSlots = typeof __propDef.slots;
export default class ShuffleOutline extends SvelteComponentTyped<ShuffleOutlineProps, ShuffleOutlineEvents, ShuffleOutlineSlots> {
}
export {};
