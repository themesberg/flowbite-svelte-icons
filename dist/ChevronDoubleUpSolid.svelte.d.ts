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
export type ChevronDoubleUpSolidProps = typeof __propDef.props;
export type ChevronDoubleUpSolidEvents = typeof __propDef.events;
export type ChevronDoubleUpSolidSlots = typeof __propDef.slots;
export default class ChevronDoubleUpSolid extends SvelteComponentTyped<ChevronDoubleUpSolidProps, ChevronDoubleUpSolidEvents, ChevronDoubleUpSolidSlots> {
}
export {};
