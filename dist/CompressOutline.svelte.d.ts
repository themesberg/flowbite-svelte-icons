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
export type CompressOutlineProps = typeof __propDef.props;
export type CompressOutlineEvents = typeof __propDef.events;
export type CompressOutlineSlots = typeof __propDef.slots;
export default class CompressOutline extends SvelteComponentTyped<CompressOutlineProps, CompressOutlineEvents, CompressOutlineSlots> {
}
export {};
