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
export type VolumeDownSolidProps = typeof __propDef.props;
export type VolumeDownSolidEvents = typeof __propDef.events;
export type VolumeDownSolidSlots = typeof __propDef.slots;
export default class VolumeDownSolid extends SvelteComponentTyped<VolumeDownSolidProps, VolumeDownSolidEvents, VolumeDownSolidSlots> {
}
export {};
