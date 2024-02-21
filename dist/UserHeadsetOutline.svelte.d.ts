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
export type UserHeadsetOutlineProps = typeof __propDef.props;
export type UserHeadsetOutlineEvents = typeof __propDef.events;
export type UserHeadsetOutlineSlots = typeof __propDef.slots;
export default class UserHeadsetOutline extends SvelteComponentTyped<UserHeadsetOutlineProps, UserHeadsetOutlineEvents, UserHeadsetOutlineSlots> {
}
export {};
