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
export type DatabaseOutlineProps = typeof __propDef.props;
export type DatabaseOutlineEvents = typeof __propDef.events;
export type DatabaseOutlineSlots = typeof __propDef.slots;
export default class DatabaseOutline extends SvelteComponentTyped<DatabaseOutlineProps, DatabaseOutlineEvents, DatabaseOutlineSlots> {
}
export {};
