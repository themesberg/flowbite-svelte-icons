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
export type LandmarkOutlineProps = typeof __propDef.props;
export type LandmarkOutlineEvents = typeof __propDef.events;
export type LandmarkOutlineSlots = typeof __propDef.slots;
export default class LandmarkOutline extends SvelteComponentTyped<LandmarkOutlineProps, LandmarkOutlineEvents, LandmarkOutlineSlots> {
}
export {};
