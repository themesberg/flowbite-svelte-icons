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
export type CaretSortSolidProps = typeof __propDef.props;
export type CaretSortSolidEvents = typeof __propDef.events;
export type CaretSortSolidSlots = typeof __propDef.slots;
export default class CaretSortSolid extends SvelteComponentTyped<CaretSortSolidProps, CaretSortSolidEvents, CaretSortSolidSlots> {
}
export {};
