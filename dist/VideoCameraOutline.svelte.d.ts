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
export type VideoCameraOutlineProps = typeof __propDef.props;
export type VideoCameraOutlineEvents = typeof __propDef.events;
export type VideoCameraOutlineSlots = typeof __propDef.slots;
export default class VideoCameraOutline extends SvelteComponentTyped<VideoCameraOutlineProps, VideoCameraOutlineEvents, VideoCameraOutlineSlots> {
}
export {};
