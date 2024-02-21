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
export type KeyboardOutlineProps = typeof __propDef.props;
export type KeyboardOutlineEvents = typeof __propDef.events;
export type KeyboardOutlineSlots = typeof __propDef.slots;
export default class KeyboardOutline extends SvelteComponentTyped<KeyboardOutlineProps, KeyboardOutlineEvents, KeyboardOutlineSlots> {
}
export {};
