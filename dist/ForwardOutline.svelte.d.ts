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
export type ForwardOutlineProps = typeof __propDef.props;
export type ForwardOutlineEvents = typeof __propDef.events;
export type ForwardOutlineSlots = typeof __propDef.slots;
export default class ForwardOutline extends SvelteComponentTyped<ForwardOutlineProps, ForwardOutlineEvents, ForwardOutlineSlots> {
}
export {};
