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
export type ArrowUpRightDownLeftOutlineProps = typeof __propDef.props;
export type ArrowUpRightDownLeftOutlineEvents = typeof __propDef.events;
export type ArrowUpRightDownLeftOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'arrow up right down left outline,';
 */
export default class ArrowUpRightDownLeftOutline extends SvelteComponent<ArrowUpRightDownLeftOutlineProps, ArrowUpRightDownLeftOutlineEvents, ArrowUpRightDownLeftOutlineSlots> {
}
export {};
