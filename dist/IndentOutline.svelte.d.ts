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
export type IndentOutlineProps = typeof __propDef.props;
export type IndentOutlineEvents = typeof __propDef.events;
export type IndentOutlineSlots = typeof __propDef.slots;
export default class IndentOutline extends SvelteComponentTyped<IndentOutlineProps, IndentOutlineEvents, IndentOutlineSlots> {
}
export {};
