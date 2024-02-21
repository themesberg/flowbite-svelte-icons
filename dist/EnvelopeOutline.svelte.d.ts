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
export type EnvelopeOutlineProps = typeof __propDef.props;
export type EnvelopeOutlineEvents = typeof __propDef.events;
export type EnvelopeOutlineSlots = typeof __propDef.slots;
export default class EnvelopeOutline extends SvelteComponentTyped<EnvelopeOutlineProps, EnvelopeOutlineEvents, EnvelopeOutlineSlots> {
}
export {};
