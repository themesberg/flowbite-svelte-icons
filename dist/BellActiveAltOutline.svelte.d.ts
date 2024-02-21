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
export type BellActiveAltOutlineProps = typeof __propDef.props;
export type BellActiveAltOutlineEvents = typeof __propDef.events;
export type BellActiveAltOutlineSlots = typeof __propDef.slots;
export default class BellActiveAltOutline extends SvelteComponentTyped<BellActiveAltOutlineProps, BellActiveAltOutlineEvents, BellActiveAltOutlineSlots> {
}
export {};
