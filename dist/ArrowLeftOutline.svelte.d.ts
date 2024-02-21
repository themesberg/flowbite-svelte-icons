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
export type ArrowLeftOutlineProps = typeof __propDef.props;
export type ArrowLeftOutlineEvents = typeof __propDef.events;
export type ArrowLeftOutlineSlots = typeof __propDef.slots;
export default class ArrowLeftOutline extends SvelteComponentTyped<ArrowLeftOutlineProps, ArrowLeftOutlineEvents, ArrowLeftOutlineSlots> {
}
export {};
