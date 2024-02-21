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
export type PapperPlaneOutlineProps = typeof __propDef.props;
export type PapperPlaneOutlineEvents = typeof __propDef.events;
export type PapperPlaneOutlineSlots = typeof __propDef.slots;
export default class PapperPlaneOutline extends SvelteComponentTyped<PapperPlaneOutlineProps, PapperPlaneOutlineEvents, PapperPlaneOutlineSlots> {
}
export {};
