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
export type MoonOutlineProps = typeof __propDef.props;
export type MoonOutlineEvents = typeof __propDef.events;
export type MoonOutlineSlots = typeof __propDef.slots;
export default class MoonOutline extends SvelteComponentTyped<MoonOutlineProps, MoonOutlineEvents, MoonOutlineSlots> {
}
export {};
