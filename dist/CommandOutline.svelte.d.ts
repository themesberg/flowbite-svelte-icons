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
export type CommandOutlineProps = typeof __propDef.props;
export type CommandOutlineEvents = typeof __propDef.events;
export type CommandOutlineSlots = typeof __propDef.slots;
export default class CommandOutline extends SvelteComponentTyped<CommandOutlineProps, CommandOutlineEvents, CommandOutlineSlots> {
}
export {};
