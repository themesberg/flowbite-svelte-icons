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
export type QuoteSolidProps = typeof __propDef.props;
export type QuoteSolidEvents = typeof __propDef.events;
export type QuoteSolidSlots = typeof __propDef.slots;
export default class QuoteSolid extends SvelteComponentTyped<QuoteSolidProps, QuoteSolidEvents, QuoteSolidSlots> {
}
export {};
