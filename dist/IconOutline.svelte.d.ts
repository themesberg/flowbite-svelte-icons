import { SvelteComponentTyped } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        icon: ComponentType;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconOutlineProps = typeof __propDef.props;
export type IconOutlineEvents = typeof __propDef.events;
export type IconOutlineSlots = typeof __propDef.slots;
export default class IconOutline extends SvelteComponentTyped<IconOutlineProps, IconOutlineEvents, IconOutlineSlots> {
}
export {};
