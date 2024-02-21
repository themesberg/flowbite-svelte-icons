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
export type CaretUpOutlineProps = typeof __propDef.props;
export type CaretUpOutlineEvents = typeof __propDef.events;
export type CaretUpOutlineSlots = typeof __propDef.slots;
export default class CaretUpOutline extends SvelteComponentTyped<CaretUpOutlineProps, CaretUpOutlineEvents, CaretUpOutlineSlots> {
}
export {};
