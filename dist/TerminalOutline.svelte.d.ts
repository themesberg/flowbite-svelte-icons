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
export type TerminalOutlineProps = typeof __propDef.props;
export type TerminalOutlineEvents = typeof __propDef.events;
export type TerminalOutlineSlots = typeof __propDef.slots;
export default class TerminalOutline extends SvelteComponentTyped<TerminalOutlineProps, TerminalOutlineEvents, TerminalOutlineSlots> {
}
export {};
