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
export type MicrophoneOutlineProps = typeof __propDef.props;
export type MicrophoneOutlineEvents = typeof __propDef.events;
export type MicrophoneOutlineSlots = typeof __propDef.slots;
export default class MicrophoneOutline extends SvelteComponentTyped<MicrophoneOutlineProps, MicrophoneOutlineEvents, MicrophoneOutlineSlots> {
}
export {};
