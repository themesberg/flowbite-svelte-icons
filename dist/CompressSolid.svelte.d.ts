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
export type CompressSolidProps = typeof __propDef.props;
export type CompressSolidEvents = typeof __propDef.events;
export type CompressSolidSlots = typeof __propDef.slots;
export default class CompressSolid extends SvelteComponentTyped<CompressSolidProps, CompressSolidEvents, CompressSolidSlots> {
}
export {};
