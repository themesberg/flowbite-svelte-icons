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
export type FingerprintSolidProps = typeof __propDef.props;
export type FingerprintSolidEvents = typeof __propDef.events;
export type FingerprintSolidSlots = typeof __propDef.slots;
export default class FingerprintSolid extends SvelteComponentTyped<FingerprintSolidProps, FingerprintSolidEvents, FingerprintSolidSlots> {
}
export {};
