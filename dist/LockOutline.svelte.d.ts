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
export type LockOutlineProps = typeof __propDef.props;
export type LockOutlineEvents = typeof __propDef.events;
export type LockOutlineSlots = typeof __propDef.slots;
export default class LockOutline extends SvelteComponentTyped<LockOutlineProps, LockOutlineEvents, LockOutlineSlots> {
}
export {};
