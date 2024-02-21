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
export type BrainSolidProps = typeof __propDef.props;
export type BrainSolidEvents = typeof __propDef.events;
export type BrainSolidSlots = typeof __propDef.slots;
export default class BrainSolid extends SvelteComponentTyped<BrainSolidProps, BrainSolidEvents, BrainSolidSlots> {
}
export {};
