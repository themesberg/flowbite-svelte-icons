import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        icon: ComponentType;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
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
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: icon: ComponentType;
 * @props:size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:strokeWidth?: string;
 * @props:class?: string;
 */
export default class IconSolid extends SvelteComponent<IconSolidProps, IconSolidEvents, IconSolidSlots> {
}
export {};
