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
export type BlenderPhoneSolidProps = typeof __propDef.props;
export type BlenderPhoneSolidEvents = typeof __propDef.events;
export type BlenderPhoneSolidSlots = typeof __propDef.slots;
export default class BlenderPhoneSolid extends SvelteComponentTyped<BlenderPhoneSolidProps, BlenderPhoneSolidEvents, BlenderPhoneSolidSlots> {
}
export {};
