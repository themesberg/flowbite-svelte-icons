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
export type ChevronDoubleLeftSolidProps = typeof __propDef.props;
export type ChevronDoubleLeftSolidEvents = typeof __propDef.events;
export type ChevronDoubleLeftSolidSlots = typeof __propDef.slots;
export default class ChevronDoubleLeftSolid extends SvelteComponentTyped<ChevronDoubleLeftSolidProps, ChevronDoubleLeftSolidEvents, ChevronDoubleLeftSolidSlots> {
}
export {};
