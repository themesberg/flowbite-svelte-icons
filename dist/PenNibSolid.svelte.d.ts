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
export type PenNibSolidProps = typeof __propDef.props;
export type PenNibSolidEvents = typeof __propDef.events;
export type PenNibSolidSlots = typeof __propDef.slots;
export default class PenNibSolid extends SvelteComponentTyped<PenNibSolidProps, PenNibSolidEvents, PenNibSolidSlots> {
}
export {};
