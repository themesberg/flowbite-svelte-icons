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
export type UserAddOutlineProps = typeof __propDef.props;
export type UserAddOutlineEvents = typeof __propDef.events;
export type UserAddOutlineSlots = typeof __propDef.slots;
export default class UserAddOutline extends SvelteComponentTyped<UserAddOutlineProps, UserAddOutlineEvents, UserAddOutlineSlots> {
}
export {};
