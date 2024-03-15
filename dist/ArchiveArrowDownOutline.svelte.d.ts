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
export type ArchiveArrowDownOutlineProps = typeof __propDef.props;
export type ArchiveArrowDownOutlineEvents = typeof __propDef.events;
export type ArchiveArrowDownOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'archive arrow down outline,';
 */
export default class ArchiveArrowDownOutline extends SvelteComponent<ArchiveArrowDownOutlineProps, ArchiveArrowDownOutlineEvents, ArchiveArrowDownOutlineSlots> {
}
export {};
