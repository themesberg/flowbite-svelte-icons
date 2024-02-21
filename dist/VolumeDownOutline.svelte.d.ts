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
export type VolumeDownOutlineProps = typeof __propDef.props;
export type VolumeDownOutlineEvents = typeof __propDef.events;
export type VolumeDownOutlineSlots = typeof __propDef.slots;
export default class VolumeDownOutline extends SvelteComponentTyped<VolumeDownOutlineProps, VolumeDownOutlineEvents, VolumeDownOutlineSlots> {
}
export {};
