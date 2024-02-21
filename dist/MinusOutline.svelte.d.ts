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
export type MinusOutlineProps = typeof __propDef.props;
export type MinusOutlineEvents = typeof __propDef.events;
export type MinusOutlineSlots = typeof __propDef.slots;
export default class MinusOutline extends SvelteComponentTyped<MinusOutlineProps, MinusOutlineEvents, MinusOutlineSlots> {
}
export {};
