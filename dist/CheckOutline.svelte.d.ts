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
export type CheckOutlineProps = typeof __propDef.props;
export type CheckOutlineEvents = typeof __propDef.events;
export type CheckOutlineSlots = typeof __propDef.slots;
export default class CheckOutline extends SvelteComponentTyped<CheckOutlineProps, CheckOutlineEvents, CheckOutlineSlots> {
}
export {};
