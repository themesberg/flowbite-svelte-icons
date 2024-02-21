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
export type ChevronRightSolidProps = typeof __propDef.props;
export type ChevronRightSolidEvents = typeof __propDef.events;
export type ChevronRightSolidSlots = typeof __propDef.slots;
export default class ChevronRightSolid extends SvelteComponentTyped<ChevronRightSolidProps, ChevronRightSolidEvents, ChevronRightSolidSlots> {
}
export {};
