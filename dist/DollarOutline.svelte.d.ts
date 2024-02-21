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
export type DollarOutlineProps = typeof __propDef.props;
export type DollarOutlineEvents = typeof __propDef.events;
export type DollarOutlineSlots = typeof __propDef.slots;
export default class DollarOutline extends SvelteComponentTyped<DollarOutlineProps, DollarOutlineEvents, DollarOutlineSlots> {
}
export {};
