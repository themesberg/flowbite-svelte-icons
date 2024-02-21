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
export type EnvelopeSolidProps = typeof __propDef.props;
export type EnvelopeSolidEvents = typeof __propDef.events;
export type EnvelopeSolidSlots = typeof __propDef.slots;
export default class EnvelopeSolid extends SvelteComponentTyped<EnvelopeSolidProps, EnvelopeSolidEvents, EnvelopeSolidSlots> {
}
export {};
