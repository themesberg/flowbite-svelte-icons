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
export type FingerprintOutlineProps = typeof __propDef.props;
export type FingerprintOutlineEvents = typeof __propDef.events;
export type FingerprintOutlineSlots = typeof __propDef.slots;
export default class FingerprintOutline extends SvelteComponentTyped<FingerprintOutlineProps, FingerprintOutlineEvents, FingerprintOutlineSlots> {
}
export {};
