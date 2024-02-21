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
export type ArrowRightArrowLeftSolidProps = typeof __propDef.props;
export type ArrowRightArrowLeftSolidEvents = typeof __propDef.events;
export type ArrowRightArrowLeftSolidSlots = typeof __propDef.slots;
export default class ArrowRightArrowLeftSolid extends SvelteComponentTyped<ArrowRightArrowLeftSolidProps, ArrowRightArrowLeftSolidEvents, ArrowRightArrowLeftSolidSlots> {
}
export {};
