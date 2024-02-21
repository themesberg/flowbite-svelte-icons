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
export type AngleDownOutlineProps = typeof __propDef.props;
export type AngleDownOutlineEvents = typeof __propDef.events;
export type AngleDownOutlineSlots = typeof __propDef.slots;
export default class AngleDownOutline extends SvelteComponentTyped<AngleDownOutlineProps, AngleDownOutlineEvents, AngleDownOutlineSlots> {
}
export {};
