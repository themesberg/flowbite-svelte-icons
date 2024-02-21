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
export type ScaleBalancedSolidProps = typeof __propDef.props;
export type ScaleBalancedSolidEvents = typeof __propDef.events;
export type ScaleBalancedSolidSlots = typeof __propDef.slots;
export default class ScaleBalancedSolid extends SvelteComponentTyped<ScaleBalancedSolidProps, ScaleBalancedSolidEvents, ScaleBalancedSolidSlots> {
}
export {};
