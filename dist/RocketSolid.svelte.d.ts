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
export type RocketSolidProps = typeof __propDef.props;
export type RocketSolidEvents = typeof __propDef.events;
export type RocketSolidSlots = typeof __propDef.slots;
export default class RocketSolid extends SvelteComponentTyped<RocketSolidProps, RocketSolidEvents, RocketSolidSlots> {
}
export {};
