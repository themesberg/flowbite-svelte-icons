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
export type UsersGroupOutlineProps = typeof __propDef.props;
export type UsersGroupOutlineEvents = typeof __propDef.events;
export type UsersGroupOutlineSlots = typeof __propDef.slots;
export default class UsersGroupOutline extends SvelteComponentTyped<UsersGroupOutlineProps, UsersGroupOutlineEvents, UsersGroupOutlineSlots> {
}
export {};
