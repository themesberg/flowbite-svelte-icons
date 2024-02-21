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
export type StackoverflowSolidProps = typeof __propDef.props;
export type StackoverflowSolidEvents = typeof __propDef.events;
export type StackoverflowSolidSlots = typeof __propDef.slots;
export default class StackoverflowSolid extends SvelteComponentTyped<StackoverflowSolidProps, StackoverflowSolidEvents, StackoverflowSolidSlots> {
}
export {};
