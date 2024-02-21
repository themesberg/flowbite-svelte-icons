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
export type ArrowRightOutlineProps = typeof __propDef.props;
export type ArrowRightOutlineEvents = typeof __propDef.events;
export type ArrowRightOutlineSlots = typeof __propDef.slots;
export default class ArrowRightOutline extends SvelteComponentTyped<ArrowRightOutlineProps, ArrowRightOutlineEvents, ArrowRightOutlineSlots> {
}
export {};
