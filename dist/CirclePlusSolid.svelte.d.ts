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
export type CirclePlusSolidProps = typeof __propDef.props;
export type CirclePlusSolidEvents = typeof __propDef.events;
export type CirclePlusSolidSlots = typeof __propDef.slots;
export default class CirclePlusSolid extends SvelteComponentTyped<CirclePlusSolidProps, CirclePlusSolidEvents, CirclePlusSolidSlots> {
}
export {};
