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
export type EnvelopeOpenSolidProps = typeof __propDef.props;
export type EnvelopeOpenSolidEvents = typeof __propDef.events;
export type EnvelopeOpenSolidSlots = typeof __propDef.slots;
export default class EnvelopeOpenSolid extends SvelteComponentTyped<EnvelopeOpenSolidProps, EnvelopeOpenSolidEvents, EnvelopeOpenSolidSlots> {
}
export {};
