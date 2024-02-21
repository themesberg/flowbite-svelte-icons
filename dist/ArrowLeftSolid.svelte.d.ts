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
export type ArrowLeftSolidProps = typeof __propDef.props;
export type ArrowLeftSolidEvents = typeof __propDef.events;
export type ArrowLeftSolidSlots = typeof __propDef.slots;
export default class ArrowLeftSolid extends SvelteComponentTyped<ArrowLeftSolidProps, ArrowLeftSolidEvents, ArrowLeftSolidSlots> {
}
export {};
