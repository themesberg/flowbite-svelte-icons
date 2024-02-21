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
export type DollarSolidProps = typeof __propDef.props;
export type DollarSolidEvents = typeof __propDef.events;
export type DollarSolidSlots = typeof __propDef.slots;
export default class DollarSolid extends SvelteComponentTyped<DollarSolidProps, DollarSolidEvents, DollarSolidSlots> {
}
export {};
