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
export type FaceLaughOutlineProps = typeof __propDef.props;
export type FaceLaughOutlineEvents = typeof __propDef.events;
export type FaceLaughOutlineSlots = typeof __propDef.slots;
export default class FaceLaughOutline extends SvelteComponentTyped<FaceLaughOutlineProps, FaceLaughOutlineEvents, FaceLaughOutlineSlots> {
}
export {};
