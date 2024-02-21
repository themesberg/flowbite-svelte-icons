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
export type FireOutlineProps = typeof __propDef.props;
export type FireOutlineEvents = typeof __propDef.events;
export type FireOutlineSlots = typeof __propDef.slots;
export default class FireOutline extends SvelteComponentTyped<FireOutlineProps, FireOutlineEvents, FireOutlineSlots> {
}
export {};
