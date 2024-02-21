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
export type RedoOutlineProps = typeof __propDef.props;
export type RedoOutlineEvents = typeof __propDef.events;
export type RedoOutlineSlots = typeof __propDef.slots;
export default class RedoOutline extends SvelteComponentTyped<RedoOutlineProps, RedoOutlineEvents, RedoOutlineSlots> {
}
export {};
