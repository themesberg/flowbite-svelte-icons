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
export type OutdentOutlineProps = typeof __propDef.props;
export type OutdentOutlineEvents = typeof __propDef.events;
export type OutdentOutlineSlots = typeof __propDef.slots;
export default class OutdentOutline extends SvelteComponentTyped<OutdentOutlineProps, OutdentOutlineEvents, OutdentOutlineSlots> {
}
export {};
