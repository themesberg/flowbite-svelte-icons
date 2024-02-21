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
export type ArrowRightAltOutlineProps = typeof __propDef.props;
export type ArrowRightAltOutlineEvents = typeof __propDef.events;
export type ArrowRightAltOutlineSlots = typeof __propDef.slots;
export default class ArrowRightAltOutline extends SvelteComponentTyped<ArrowRightAltOutlineProps, ArrowRightAltOutlineEvents, ArrowRightAltOutlineSlots> {
}
export {};
