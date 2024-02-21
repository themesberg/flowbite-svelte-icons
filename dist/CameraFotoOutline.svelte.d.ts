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
export type CameraFotoOutlineProps = typeof __propDef.props;
export type CameraFotoOutlineEvents = typeof __propDef.events;
export type CameraFotoOutlineSlots = typeof __propDef.slots;
export default class CameraFotoOutline extends SvelteComponentTyped<CameraFotoOutlineProps, CameraFotoOutlineEvents, CameraFotoOutlineSlots> {
}
export {};
