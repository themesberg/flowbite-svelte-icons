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
export type BadgeCheckOutlineProps = typeof __propDef.props;
export type BadgeCheckOutlineEvents = typeof __propDef.events;
export type BadgeCheckOutlineSlots = typeof __propDef.slots;
export default class BadgeCheckOutline extends SvelteComponentTyped<BadgeCheckOutlineProps, BadgeCheckOutlineEvents, BadgeCheckOutlineSlots> {
}
export {};
