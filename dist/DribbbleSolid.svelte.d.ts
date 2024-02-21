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
export type DribbbleSolidProps = typeof __propDef.props;
export type DribbbleSolidEvents = typeof __propDef.events;
export type DribbbleSolidSlots = typeof __propDef.slots;
export default class DribbbleSolid extends SvelteComponentTyped<DribbbleSolidProps, DribbbleSolidEvents, DribbbleSolidSlots> {
}
export {};
