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
export type UserSettingsSolidProps = typeof __propDef.props;
export type UserSettingsSolidEvents = typeof __propDef.events;
export type UserSettingsSolidSlots = typeof __propDef.slots;
export default class UserSettingsSolid extends SvelteComponentTyped<UserSettingsSolidProps, UserSettingsSolidEvents, UserSettingsSolidSlots> {
}
export {};
