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
export type BackwardStepOutlineProps = typeof __propDef.props;
export type BackwardStepOutlineEvents = typeof __propDef.events;
export type BackwardStepOutlineSlots = typeof __propDef.slots;
export default class BackwardStepOutline extends SvelteComponentTyped<BackwardStepOutlineProps, BackwardStepOutlineEvents, BackwardStepOutlineSlots> {
}
export {};
