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
export type EyeSlashSolidProps = typeof __propDef.props;
export type EyeSlashSolidEvents = typeof __propDef.events;
export type EyeSlashSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'eye slash solid,';
 */
export default class EyeSlashSolid extends SvelteComponent<EyeSlashSolidProps, EyeSlashSolidEvents, EyeSlashSolidSlots> {
}
export {};
