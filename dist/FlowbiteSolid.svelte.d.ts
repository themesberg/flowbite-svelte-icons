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
export type FlowbiteSolidProps = typeof __propDef.props;
export type FlowbiteSolidEvents = typeof __propDef.events;
export type FlowbiteSolidSlots = typeof __propDef.slots;
export default class FlowbiteSolid extends SvelteComponentTyped<FlowbiteSolidProps, FlowbiteSolidEvents, FlowbiteSolidSlots> {
}
export {};
