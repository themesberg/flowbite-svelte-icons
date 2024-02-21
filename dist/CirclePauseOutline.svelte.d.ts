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
export type CirclePauseOutlineProps = typeof __propDef.props;
export type CirclePauseOutlineEvents = typeof __propDef.events;
export type CirclePauseOutlineSlots = typeof __propDef.slots;
export default class CirclePauseOutline extends SvelteComponentTyped<CirclePauseOutlineProps, CirclePauseOutlineEvents, CirclePauseOutlineSlots> {
}
export {};
