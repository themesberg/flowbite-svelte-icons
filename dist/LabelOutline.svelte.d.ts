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
export type LabelOutlineProps = typeof __propDef.props;
export type LabelOutlineEvents = typeof __propDef.events;
export type LabelOutlineSlots = typeof __propDef.slots;
export default class LabelOutline extends SvelteComponentTyped<LabelOutlineProps, LabelOutlineEvents, LabelOutlineSlots> {
}
export {};
