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
export type VolumeUpOutlineProps = typeof __propDef.props;
export type VolumeUpOutlineEvents = typeof __propDef.events;
export type VolumeUpOutlineSlots = typeof __propDef.slots;
export default class VolumeUpOutline extends SvelteComponentTyped<VolumeUpOutlineProps, VolumeUpOutlineEvents, VolumeUpOutlineSlots> {
}
export {};
