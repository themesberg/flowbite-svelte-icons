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
export type TrashBinOutlineProps = typeof __propDef.props;
export type TrashBinOutlineEvents = typeof __propDef.events;
export type TrashBinOutlineSlots = typeof __propDef.slots;
export default class TrashBinOutline extends SvelteComponentTyped<TrashBinOutlineProps, TrashBinOutlineEvents, TrashBinOutlineSlots> {
}
export {};
