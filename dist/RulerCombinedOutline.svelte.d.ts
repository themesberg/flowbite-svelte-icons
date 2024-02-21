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
export type RulerCombinedOutlineProps = typeof __propDef.props;
export type RulerCombinedOutlineEvents = typeof __propDef.events;
export type RulerCombinedOutlineSlots = typeof __propDef.slots;
export default class RulerCombinedOutline extends SvelteComponentTyped<RulerCombinedOutlineProps, RulerCombinedOutlineEvents, RulerCombinedOutlineSlots> {
}
export {};
