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
export type CaretRightOutlineProps = typeof __propDef.props;
export type CaretRightOutlineEvents = typeof __propDef.events;
export type CaretRightOutlineSlots = typeof __propDef.slots;
export default class CaretRightOutline extends SvelteComponentTyped<CaretRightOutlineProps, CaretRightOutlineEvents, CaretRightOutlineSlots> {
}
export {};
