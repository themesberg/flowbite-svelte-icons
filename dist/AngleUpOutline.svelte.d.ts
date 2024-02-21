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
export type AngleUpOutlineProps = typeof __propDef.props;
export type AngleUpOutlineEvents = typeof __propDef.events;
export type AngleUpOutlineSlots = typeof __propDef.slots;
export default class AngleUpOutline extends SvelteComponentTyped<AngleUpOutlineProps, AngleUpOutlineEvents, AngleUpOutlineSlots> {
}
export {};
