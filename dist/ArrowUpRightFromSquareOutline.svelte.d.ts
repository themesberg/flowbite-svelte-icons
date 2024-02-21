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
export type ArrowUpRightFromSquareOutlineProps = typeof __propDef.props;
export type ArrowUpRightFromSquareOutlineEvents = typeof __propDef.events;
export type ArrowUpRightFromSquareOutlineSlots = typeof __propDef.slots;
export default class ArrowUpRightFromSquareOutline extends SvelteComponentTyped<ArrowUpRightFromSquareOutlineProps, ArrowUpRightFromSquareOutlineEvents, ArrowUpRightFromSquareOutlineSlots> {
}
export {};
