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
export type FlagOutlineProps = typeof __propDef.props;
export type FlagOutlineEvents = typeof __propDef.events;
export type FlagOutlineSlots = typeof __propDef.slots;
export default class FlagOutline extends SvelteComponentTyped<FlagOutlineProps, FlagOutlineEvents, FlagOutlineSlots> {
}
export {};
