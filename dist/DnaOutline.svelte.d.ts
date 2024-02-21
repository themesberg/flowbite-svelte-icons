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
export type DnaOutlineProps = typeof __propDef.props;
export type DnaOutlineEvents = typeof __propDef.events;
export type DnaOutlineSlots = typeof __propDef.slots;
export default class DnaOutline extends SvelteComponentTyped<DnaOutlineProps, DnaOutlineEvents, DnaOutlineSlots> {
}
export {};
