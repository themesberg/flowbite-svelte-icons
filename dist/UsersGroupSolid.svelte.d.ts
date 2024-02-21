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
export type UsersGroupSolidProps = typeof __propDef.props;
export type UsersGroupSolidEvents = typeof __propDef.events;
export type UsersGroupSolidSlots = typeof __propDef.slots;
export default class UsersGroupSolid extends SvelteComponentTyped<UsersGroupSolidProps, UsersGroupSolidEvents, UsersGroupSolidSlots> {
}
export {};
