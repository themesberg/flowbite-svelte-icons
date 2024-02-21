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
export type UserSolidProps = typeof __propDef.props;
export type UserSolidEvents = typeof __propDef.events;
export type UserSolidSlots = typeof __propDef.slots;
export default class UserSolid extends SvelteComponentTyped<UserSolidProps, UserSolidEvents, UserSolidSlots> {
}
export {};
