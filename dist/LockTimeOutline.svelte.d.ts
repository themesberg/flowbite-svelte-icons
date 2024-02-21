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
export type LockTimeOutlineProps = typeof __propDef.props;
export type LockTimeOutlineEvents = typeof __propDef.events;
export type LockTimeOutlineSlots = typeof __propDef.slots;
export default class LockTimeOutline extends SvelteComponentTyped<LockTimeOutlineProps, LockTimeOutlineEvents, LockTimeOutlineSlots> {
}
export {};
