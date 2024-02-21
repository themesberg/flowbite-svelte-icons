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
export type UsersOutlineProps = typeof __propDef.props;
export type UsersOutlineEvents = typeof __propDef.events;
export type UsersOutlineSlots = typeof __propDef.slots;
export default class UsersOutline extends SvelteComponentTyped<UsersOutlineProps, UsersOutlineEvents, UsersOutlineSlots> {
}
export {};
