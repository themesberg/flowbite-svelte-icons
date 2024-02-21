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
export type ShieldOutlineProps = typeof __propDef.props;
export type ShieldOutlineEvents = typeof __propDef.events;
export type ShieldOutlineSlots = typeof __propDef.slots;
export default class ShieldOutline extends SvelteComponentTyped<ShieldOutlineProps, ShieldOutlineEvents, ShieldOutlineSlots> {
}
export {};
