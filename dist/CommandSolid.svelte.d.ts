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
export type CommandSolidProps = typeof __propDef.props;
export type CommandSolidEvents = typeof __propDef.events;
export type CommandSolidSlots = typeof __propDef.slots;
export default class CommandSolid extends SvelteComponentTyped<CommandSolidProps, CommandSolidEvents, CommandSolidSlots> {
}
export {};
