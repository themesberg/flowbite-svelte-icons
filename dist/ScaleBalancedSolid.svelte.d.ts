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
export type ScaleBalancedSolidProps = typeof __propDef.props;
export type ScaleBalancedSolidEvents = typeof __propDef.events;
export type ScaleBalancedSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'scale balanced solid,';
 */
export default class ScaleBalancedSolid extends SvelteComponent<ScaleBalancedSolidProps, ScaleBalancedSolidEvents, ScaleBalancedSolidSlots> {
}
export {};
