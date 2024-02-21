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
export type UserEditSolidProps = typeof __propDef.props;
export type UserEditSolidEvents = typeof __propDef.events;
export type UserEditSolidSlots = typeof __propDef.slots;
export default class UserEditSolid extends SvelteComponentTyped<UserEditSolidProps, UserEditSolidEvents, UserEditSolidSlots> {
}
export {};
