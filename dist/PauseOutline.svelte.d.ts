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
export type PauseOutlineProps = typeof __propDef.props;
export type PauseOutlineEvents = typeof __propDef.events;
export type PauseOutlineSlots = typeof __propDef.slots;
export default class PauseOutline extends SvelteComponentTyped<PauseOutlineProps, PauseOutlineEvents, PauseOutlineSlots> {
}
export {};
