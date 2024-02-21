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
export type ComputerSpeakerSolidProps = typeof __propDef.props;
export type ComputerSpeakerSolidEvents = typeof __propDef.events;
export type ComputerSpeakerSolidSlots = typeof __propDef.slots;
export default class ComputerSpeakerSolid extends SvelteComponentTyped<ComputerSpeakerSolidProps, ComputerSpeakerSolidEvents, ComputerSpeakerSolidSlots> {
}
export {};
