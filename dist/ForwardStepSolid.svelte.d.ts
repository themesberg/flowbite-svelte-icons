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
export type ForwardStepSolidProps = typeof __propDef.props;
export type ForwardStepSolidEvents = typeof __propDef.events;
export type ForwardStepSolidSlots = typeof __propDef.slots;
export default class ForwardStepSolid extends SvelteComponentTyped<ForwardStepSolidProps, ForwardStepSolidEvents, ForwardStepSolidSlots> {
}
export {};
