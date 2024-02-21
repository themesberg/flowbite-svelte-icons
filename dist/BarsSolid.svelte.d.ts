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
export type BarsSolidProps = typeof __propDef.props;
export type BarsSolidEvents = typeof __propDef.events;
export type BarsSolidSlots = typeof __propDef.slots;
export default class BarsSolid extends SvelteComponentTyped<BarsSolidProps, BarsSolidEvents, BarsSolidSlots> {
}
export {};
