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
export type CaretLeftOutlineProps = typeof __propDef.props;
export type CaretLeftOutlineEvents = typeof __propDef.events;
export type CaretLeftOutlineSlots = typeof __propDef.slots;
export default class CaretLeftOutline extends SvelteComponentTyped<CaretLeftOutlineProps, CaretLeftOutlineEvents, CaretLeftOutlineSlots> {
}
export {};
