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
export type ChevronUpSolidProps = typeof __propDef.props;
export type ChevronUpSolidEvents = typeof __propDef.events;
export type ChevronUpSolidSlots = typeof __propDef.slots;
export default class ChevronUpSolid extends SvelteComponentTyped<ChevronUpSolidProps, ChevronUpSolidEvents, ChevronUpSolidSlots> {
}
export {};
