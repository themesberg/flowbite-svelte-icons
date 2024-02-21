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
export type ExpandSolidProps = typeof __propDef.props;
export type ExpandSolidEvents = typeof __propDef.events;
export type ExpandSolidSlots = typeof __propDef.slots;
export default class ExpandSolid extends SvelteComponentTyped<ExpandSolidProps, ExpandSolidEvents, ExpandSolidSlots> {
}
export {};
