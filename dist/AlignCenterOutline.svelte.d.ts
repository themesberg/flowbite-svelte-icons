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
export type AlignCenterOutlineProps = typeof __propDef.props;
export type AlignCenterOutlineEvents = typeof __propDef.events;
export type AlignCenterOutlineSlots = typeof __propDef.slots;
export default class AlignCenterOutline extends SvelteComponentTyped<AlignCenterOutlineProps, AlignCenterOutlineEvents, AlignCenterOutlineSlots> {
}
export {};
