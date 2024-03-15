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
export type ClapperboardPlaySolidProps = typeof __propDef.props;
export type ClapperboardPlaySolidEvents = typeof __propDef.events;
export type ClapperboardPlaySolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'clapperboard play solid,';
 */
export default class ClapperboardPlaySolid extends SvelteComponent<ClapperboardPlaySolidProps, ClapperboardPlaySolidEvents, ClapperboardPlaySolidSlots> {
}
export {};
