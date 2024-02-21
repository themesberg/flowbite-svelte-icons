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
export type UserOutlineProps = typeof __propDef.props;
export type UserOutlineEvents = typeof __propDef.events;
export type UserOutlineSlots = typeof __propDef.slots;
export default class UserOutline extends SvelteComponentTyped<UserOutlineProps, UserOutlineEvents, UserOutlineSlots> {
}
export {};
