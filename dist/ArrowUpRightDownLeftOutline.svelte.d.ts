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
export type ArrowUpRightDownLeftOutlineProps = typeof __propDef.props;
export type ArrowUpRightDownLeftOutlineEvents = typeof __propDef.events;
export type ArrowUpRightDownLeftOutlineSlots = typeof __propDef.slots;
export default class ArrowUpRightDownLeftOutline extends SvelteComponentTyped<ArrowUpRightDownLeftOutlineProps, ArrowUpRightDownLeftOutlineEvents, ArrowUpRightDownLeftOutlineSlots> {
}
export {};
