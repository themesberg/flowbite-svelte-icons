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
export type BriefcaseOutlineProps = typeof __propDef.props;
export type BriefcaseOutlineEvents = typeof __propDef.events;
export type BriefcaseOutlineSlots = typeof __propDef.slots;
export default class BriefcaseOutline extends SvelteComponentTyped<BriefcaseOutlineProps, BriefcaseOutlineEvents, BriefcaseOutlineSlots> {
}
export {};
