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
export type ForwardStepOutlineProps = typeof __propDef.props;
export type ForwardStepOutlineEvents = typeof __propDef.events;
export type ForwardStepOutlineSlots = typeof __propDef.slots;
export default class ForwardStepOutline extends SvelteComponentTyped<ForwardStepOutlineProps, ForwardStepOutlineEvents, ForwardStepOutlineSlots> {
}
export {};
