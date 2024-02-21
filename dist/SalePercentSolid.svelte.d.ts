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
export type SalePercentSolidProps = typeof __propDef.props;
export type SalePercentSolidEvents = typeof __propDef.events;
export type SalePercentSolidSlots = typeof __propDef.slots;
export default class SalePercentSolid extends SvelteComponentTyped<SalePercentSolidProps, SalePercentSolidEvents, SalePercentSolidSlots> {
}
export {};
