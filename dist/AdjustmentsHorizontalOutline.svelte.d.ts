import { SvelteComponent } from "svelte";
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
export type AdjustmentsHorizontalOutlineProps = typeof __propDef.props;
export type AdjustmentsHorizontalOutlineEvents = typeof __propDef.events;
export type AdjustmentsHorizontalOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'adjustments horizontal outline,';
 */
export default class AdjustmentsHorizontalOutline extends SvelteComponent<AdjustmentsHorizontalOutlineProps, AdjustmentsHorizontalOutlineEvents, AdjustmentsHorizontalOutlineSlots> {
}
export {};
