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
export type MicrophoneSolidProps = typeof __propDef.props;
export type MicrophoneSolidEvents = typeof __propDef.events;
export type MicrophoneSolidSlots = typeof __propDef.slots;
export default class MicrophoneSolid extends SvelteComponentTyped<MicrophoneSolidProps, MicrophoneSolidEvents, MicrophoneSolidSlots> {
}
export {};
