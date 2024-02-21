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
export type AdjustmentsVerticalSolidProps = typeof __propDef.props;
export type AdjustmentsVerticalSolidEvents = typeof __propDef.events;
export type AdjustmentsVerticalSolidSlots = typeof __propDef.slots;
export default class AdjustmentsVerticalSolid extends SvelteComponentTyped<AdjustmentsVerticalSolidProps, AdjustmentsVerticalSolidEvents, AdjustmentsVerticalSolidSlots> {
}
export {};
