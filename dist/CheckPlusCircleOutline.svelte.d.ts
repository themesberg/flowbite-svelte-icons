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
export type CheckPlusCircleOutlineProps = typeof __propDef.props;
export type CheckPlusCircleOutlineEvents = typeof __propDef.events;
export type CheckPlusCircleOutlineSlots = typeof __propDef.slots;
export default class CheckPlusCircleOutline extends SvelteComponentTyped<CheckPlusCircleOutlineProps, CheckPlusCircleOutlineEvents, CheckPlusCircleOutlineSlots> {
}
export {};
