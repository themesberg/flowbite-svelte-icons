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
export type SalePercentOutlineProps = typeof __propDef.props;
export type SalePercentOutlineEvents = typeof __propDef.events;
export type SalePercentOutlineSlots = typeof __propDef.slots;
export default class SalePercentOutline extends SvelteComponentTyped<SalePercentOutlineProps, SalePercentOutlineEvents, SalePercentOutlineSlots> {
}
export {};
