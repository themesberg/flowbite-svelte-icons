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
export type EyeOutlineProps = typeof __propDef.props;
export type EyeOutlineEvents = typeof __propDef.events;
export type EyeOutlineSlots = typeof __propDef.slots;
export default class EyeOutline extends SvelteComponentTyped<EyeOutlineProps, EyeOutlineEvents, EyeOutlineSlots> {
}
export {};
