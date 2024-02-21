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
export type LockOpenOutlineProps = typeof __propDef.props;
export type LockOpenOutlineEvents = typeof __propDef.events;
export type LockOpenOutlineSlots = typeof __propDef.slots;
export default class LockOpenOutline extends SvelteComponentTyped<LockOpenOutlineProps, LockOpenOutlineEvents, LockOpenOutlineSlots> {
}
export {};
