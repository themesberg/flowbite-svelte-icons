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
export type ArrowUpSolidProps = typeof __propDef.props;
export type ArrowUpSolidEvents = typeof __propDef.events;
export type ArrowUpSolidSlots = typeof __propDef.slots;
export default class ArrowUpSolid extends SvelteComponentTyped<ArrowUpSolidProps, ArrowUpSolidEvents, ArrowUpSolidSlots> {
}
export {};
