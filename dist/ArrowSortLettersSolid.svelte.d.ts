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
export type ArrowSortLettersSolidProps = typeof __propDef.props;
export type ArrowSortLettersSolidEvents = typeof __propDef.events;
export type ArrowSortLettersSolidSlots = typeof __propDef.slots;
export default class ArrowSortLettersSolid extends SvelteComponentTyped<ArrowSortLettersSolidProps, ArrowSortLettersSolidEvents, ArrowSortLettersSolidSlots> {
}
export {};
