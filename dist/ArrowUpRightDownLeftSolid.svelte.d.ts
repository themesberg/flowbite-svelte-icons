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
export type ArrowUpRightDownLeftSolidProps = typeof __propDef.props;
export type ArrowUpRightDownLeftSolidEvents = typeof __propDef.events;
export type ArrowUpRightDownLeftSolidSlots = typeof __propDef.slots;
export default class ArrowUpRightDownLeftSolid extends SvelteComponentTyped<ArrowUpRightDownLeftSolidProps, ArrowUpRightDownLeftSolidEvents, ArrowUpRightDownLeftSolidSlots> {
}
export {};
