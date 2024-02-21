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
export type BarsFromLeftOutlineProps = typeof __propDef.props;
export type BarsFromLeftOutlineEvents = typeof __propDef.events;
export type BarsFromLeftOutlineSlots = typeof __propDef.slots;
export default class BarsFromLeftOutline extends SvelteComponentTyped<BarsFromLeftOutlineProps, BarsFromLeftOutlineEvents, BarsFromLeftOutlineSlots> {
}
export {};
