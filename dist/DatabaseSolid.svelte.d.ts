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
export type DatabaseSolidProps = typeof __propDef.props;
export type DatabaseSolidEvents = typeof __propDef.events;
export type DatabaseSolidSlots = typeof __propDef.slots;
export default class DatabaseSolid extends SvelteComponentTyped<DatabaseSolidProps, DatabaseSolidEvents, DatabaseSolidSlots> {
}
export {};
