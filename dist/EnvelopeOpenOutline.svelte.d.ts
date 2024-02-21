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
export type EnvelopeOpenOutlineProps = typeof __propDef.props;
export type EnvelopeOpenOutlineEvents = typeof __propDef.events;
export type EnvelopeOpenOutlineSlots = typeof __propDef.slots;
export default class EnvelopeOpenOutline extends SvelteComponentTyped<EnvelopeOpenOutlineProps, EnvelopeOpenOutlineEvents, EnvelopeOpenOutlineSlots> {
}
export {};
