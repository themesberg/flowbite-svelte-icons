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
export type ChevronDownSolidProps = typeof __propDef.props;
export type ChevronDownSolidEvents = typeof __propDef.events;
export type ChevronDownSolidSlots = typeof __propDef.slots;
export default class ChevronDownSolid extends SvelteComponentTyped<ChevronDownSolidProps, ChevronDownSolidEvents, ChevronDownSolidSlots> {
}
export {};
