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
export type UserCircleOutlineProps = typeof __propDef.props;
export type UserCircleOutlineEvents = typeof __propDef.events;
export type UserCircleOutlineSlots = typeof __propDef.slots;
export default class UserCircleOutline extends SvelteComponentTyped<UserCircleOutlineProps, UserCircleOutlineEvents, UserCircleOutlineSlots> {
}
export {};
