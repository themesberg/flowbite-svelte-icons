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
export type UserEditOutlineProps = typeof __propDef.props;
export type UserEditOutlineEvents = typeof __propDef.events;
export type UserEditOutlineSlots = typeof __propDef.slots;
export default class UserEditOutline extends SvelteComponentTyped<UserEditOutlineProps, UserEditOutlineEvents, UserEditOutlineSlots> {
}
export {};
