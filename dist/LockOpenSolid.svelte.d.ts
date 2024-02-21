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
export type LockOpenSolidProps = typeof __propDef.props;
export type LockOpenSolidEvents = typeof __propDef.events;
export type LockOpenSolidSlots = typeof __propDef.slots;
export default class LockOpenSolid extends SvelteComponentTyped<LockOpenSolidProps, LockOpenSolidEvents, LockOpenSolidSlots> {
}
export {};
