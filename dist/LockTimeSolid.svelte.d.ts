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
export type LockTimeSolidProps = typeof __propDef.props;
export type LockTimeSolidEvents = typeof __propDef.events;
export type LockTimeSolidSlots = typeof __propDef.slots;
export default class LockTimeSolid extends SvelteComponentTyped<LockTimeSolidProps, LockTimeSolidEvents, LockTimeSolidSlots> {
}
export {};
