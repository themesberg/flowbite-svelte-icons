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
export type ScaleBalancedOutlineProps = typeof __propDef.props;
export type ScaleBalancedOutlineEvents = typeof __propDef.events;
export type ScaleBalancedOutlineSlots = typeof __propDef.slots;
export default class ScaleBalancedOutline extends SvelteComponentTyped<ScaleBalancedOutlineProps, ScaleBalancedOutlineEvents, ScaleBalancedOutlineSlots> {
}
export {};
