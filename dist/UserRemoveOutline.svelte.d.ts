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
export type UserRemoveOutlineProps = typeof __propDef.props;
export type UserRemoveOutlineEvents = typeof __propDef.events;
export type UserRemoveOutlineSlots = typeof __propDef.slots;
export default class UserRemoveOutline extends SvelteComponentTyped<UserRemoveOutlineProps, UserRemoveOutlineEvents, UserRemoveOutlineSlots> {
}
export {};
