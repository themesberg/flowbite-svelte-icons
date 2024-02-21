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
export type ChevronDoubleRightSolidProps = typeof __propDef.props;
export type ChevronDoubleRightSolidEvents = typeof __propDef.events;
export type ChevronDoubleRightSolidSlots = typeof __propDef.slots;
export default class ChevronDoubleRightSolid extends SvelteComponentTyped<ChevronDoubleRightSolidProps, ChevronDoubleRightSolidEvents, ChevronDoubleRightSolidSlots> {
}
export {};
