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
export type CheckCircleOutlineProps = typeof __propDef.props;
export type CheckCircleOutlineEvents = typeof __propDef.events;
export type CheckCircleOutlineSlots = typeof __propDef.slots;
export default class CheckCircleOutline extends SvelteComponentTyped<CheckCircleOutlineProps, CheckCircleOutlineEvents, CheckCircleOutlineSlots> {
}
export {};
