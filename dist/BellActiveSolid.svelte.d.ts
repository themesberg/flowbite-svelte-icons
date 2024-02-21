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
export type BellActiveSolidProps = typeof __propDef.props;
export type BellActiveSolidEvents = typeof __propDef.events;
export type BellActiveSolidSlots = typeof __propDef.slots;
export default class BellActiveSolid extends SvelteComponentTyped<BellActiveSolidProps, BellActiveSolidEvents, BellActiveSolidSlots> {
}
export {};
