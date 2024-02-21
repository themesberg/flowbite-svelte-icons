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
export type PenSolidProps = typeof __propDef.props;
export type PenSolidEvents = typeof __propDef.events;
export type PenSolidSlots = typeof __propDef.slots;
export default class PenSolid extends SvelteComponentTyped<PenSolidProps, PenSolidEvents, PenSolidSlots> {
}
export {};
