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
export type EuroOutlineProps = typeof __propDef.props;
export type EuroOutlineEvents = typeof __propDef.events;
export type EuroOutlineSlots = typeof __propDef.slots;
export default class EuroOutline extends SvelteComponentTyped<EuroOutlineProps, EuroOutlineEvents, EuroOutlineSlots> {
}
export {};
