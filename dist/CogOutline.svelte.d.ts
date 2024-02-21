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
export type CogOutlineProps = typeof __propDef.props;
export type CogOutlineEvents = typeof __propDef.events;
export type CogOutlineSlots = typeof __propDef.slots;
export default class CogOutline extends SvelteComponentTyped<CogOutlineProps, CogOutlineEvents, CogOutlineSlots> {
}
export {};
