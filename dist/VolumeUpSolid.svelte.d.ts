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
export type VolumeUpSolidProps = typeof __propDef.props;
export type VolumeUpSolidEvents = typeof __propDef.events;
export type VolumeUpSolidSlots = typeof __propDef.slots;
export default class VolumeUpSolid extends SvelteComponentTyped<VolumeUpSolidProps, VolumeUpSolidEvents, VolumeUpSolidSlots> {
}
export {};
