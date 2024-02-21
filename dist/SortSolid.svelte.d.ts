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
export type SortSolidProps = typeof __propDef.props;
export type SortSolidEvents = typeof __propDef.events;
export type SortSolidSlots = typeof __propDef.slots;
export default class SortSolid extends SvelteComponentTyped<SortSolidProps, SortSolidEvents, SortSolidSlots> {
}
export {};
