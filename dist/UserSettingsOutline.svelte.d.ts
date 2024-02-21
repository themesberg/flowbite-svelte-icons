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
export type UserSettingsOutlineProps = typeof __propDef.props;
export type UserSettingsOutlineEvents = typeof __propDef.events;
export type UserSettingsOutlineSlots = typeof __propDef.slots;
export default class UserSettingsOutline extends SvelteComponentTyped<UserSettingsOutlineProps, UserSettingsOutlineEvents, UserSettingsOutlineSlots> {
}
export {};
