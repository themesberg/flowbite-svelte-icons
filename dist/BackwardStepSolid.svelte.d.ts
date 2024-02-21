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
export type BackwardStepSolidProps = typeof __propDef.props;
export type BackwardStepSolidEvents = typeof __propDef.events;
export type BackwardStepSolidSlots = typeof __propDef.slots;
export default class BackwardStepSolid extends SvelteComponentTyped<BackwardStepSolidProps, BackwardStepSolidEvents, BackwardStepSolidSlots> {
}
export {};
