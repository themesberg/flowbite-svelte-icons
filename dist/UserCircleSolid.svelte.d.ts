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
export type UserCircleSolidProps = typeof __propDef.props;
export type UserCircleSolidEvents = typeof __propDef.events;
export type UserCircleSolidSlots = typeof __propDef.slots;
export default class UserCircleSolid extends SvelteComponentTyped<UserCircleSolidProps, UserCircleSolidEvents, UserCircleSolidSlots> {
}
export {};
