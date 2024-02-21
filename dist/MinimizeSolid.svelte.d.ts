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
export type MinimizeSolidProps = typeof __propDef.props;
export type MinimizeSolidEvents = typeof __propDef.events;
export type MinimizeSolidSlots = typeof __propDef.slots;
export default class MinimizeSolid extends SvelteComponentTyped<MinimizeSolidProps, MinimizeSolidEvents, MinimizeSolidSlots> {
}
export {};
