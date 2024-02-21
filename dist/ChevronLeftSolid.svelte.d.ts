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
export type ChevronLeftSolidProps = typeof __propDef.props;
export type ChevronLeftSolidEvents = typeof __propDef.events;
export type ChevronLeftSolidSlots = typeof __propDef.slots;
export default class ChevronLeftSolid extends SvelteComponentTyped<ChevronLeftSolidProps, ChevronLeftSolidEvents, ChevronLeftSolidSlots> {
}
export {};
