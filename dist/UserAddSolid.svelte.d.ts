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
export type UserAddSolidProps = typeof __propDef.props;
export type UserAddSolidEvents = typeof __propDef.events;
export type UserAddSolidSlots = typeof __propDef.slots;
export default class UserAddSolid extends SvelteComponentTyped<UserAddSolidProps, UserAddSolidEvents, UserAddSolidSlots> {
}
export {};
