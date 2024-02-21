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
export type LockSolidProps = typeof __propDef.props;
export type LockSolidEvents = typeof __propDef.events;
export type LockSolidSlots = typeof __propDef.slots;
export default class LockSolid extends SvelteComponentTyped<LockSolidProps, LockSolidEvents, LockSolidSlots> {
}
export {};
