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
export type TerminalSolidProps = typeof __propDef.props;
export type TerminalSolidEvents = typeof __propDef.events;
export type TerminalSolidSlots = typeof __propDef.slots;
export default class TerminalSolid extends SvelteComponentTyped<TerminalSolidProps, TerminalSolidEvents, TerminalSolidSlots> {
}
export {};
