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
export type HeadphonesOutlineProps = typeof __propDef.props;
export type HeadphonesOutlineEvents = typeof __propDef.events;
export type HeadphonesOutlineSlots = typeof __propDef.slots;
export default class HeadphonesOutline extends SvelteComponentTyped<HeadphonesOutlineProps, HeadphonesOutlineEvents, HeadphonesOutlineSlots> {
}
export {};
