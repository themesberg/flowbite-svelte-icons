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
export type ComputerSpeakerOutlineProps = typeof __propDef.props;
export type ComputerSpeakerOutlineEvents = typeof __propDef.events;
export type ComputerSpeakerOutlineSlots = typeof __propDef.slots;
export default class ComputerSpeakerOutline extends SvelteComponentTyped<ComputerSpeakerOutlineProps, ComputerSpeakerOutlineEvents, ComputerSpeakerOutlineSlots> {
}
export {};
