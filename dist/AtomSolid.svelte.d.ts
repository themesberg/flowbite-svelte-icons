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
export type AtomSolidProps = typeof __propDef.props;
export type AtomSolidEvents = typeof __propDef.events;
export type AtomSolidSlots = typeof __propDef.slots;
export default class AtomSolid extends SvelteComponentTyped<AtomSolidProps, AtomSolidEvents, AtomSolidSlots> {
}
export {};
