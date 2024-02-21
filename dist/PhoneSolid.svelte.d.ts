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
export type PhoneSolidProps = typeof __propDef.props;
export type PhoneSolidEvents = typeof __propDef.events;
export type PhoneSolidSlots = typeof __propDef.slots;
export default class PhoneSolid extends SvelteComponentTyped<PhoneSolidProps, PhoneSolidEvents, PhoneSolidSlots> {
}
export {};
