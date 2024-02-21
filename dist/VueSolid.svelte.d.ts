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
export type VueSolidProps = typeof __propDef.props;
export type VueSolidEvents = typeof __propDef.events;
export type VueSolidSlots = typeof __propDef.slots;
export default class VueSolid extends SvelteComponentTyped<VueSolidProps, VueSolidEvents, VueSolidSlots> {
}
export {};
