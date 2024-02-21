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
export type PauseSolidProps = typeof __propDef.props;
export type PauseSolidEvents = typeof __propDef.events;
export type PauseSolidSlots = typeof __propDef.slots;
export default class PauseSolid extends SvelteComponentTyped<PauseSolidProps, PauseSolidEvents, PauseSolidSlots> {
}
export {};
