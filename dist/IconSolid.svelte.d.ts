import { SvelteComponentTyped } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        icon: ComponentType;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
        strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
        strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
        strokeWidth?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconSolidProps = typeof __propDef.props;
export type IconSolidEvents = typeof __propDef.events;
export type IconSolidSlots = typeof __propDef.slots;
export default class IconSolid extends SvelteComponentTyped<IconSolidProps, IconSolidEvents, IconSolidSlots> {
}
export {};
