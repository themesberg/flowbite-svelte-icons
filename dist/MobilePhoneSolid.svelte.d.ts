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
export type MobilePhoneSolidProps = typeof __propDef.props;
export type MobilePhoneSolidEvents = typeof __propDef.events;
export type MobilePhoneSolidSlots = typeof __propDef.slots;
export default class MobilePhoneSolid extends SvelteComponentTyped<MobilePhoneSolidProps, MobilePhoneSolidEvents, MobilePhoneSolidSlots> {
}
export {};
