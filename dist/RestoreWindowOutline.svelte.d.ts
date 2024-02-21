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
export type RestoreWindowOutlineProps = typeof __propDef.props;
export type RestoreWindowOutlineEvents = typeof __propDef.events;
export type RestoreWindowOutlineSlots = typeof __propDef.slots;
export default class RestoreWindowOutline extends SvelteComponentTyped<RestoreWindowOutlineProps, RestoreWindowOutlineEvents, RestoreWindowOutlineSlots> {
}
export {};
