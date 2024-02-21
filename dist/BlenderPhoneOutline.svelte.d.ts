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
export type BlenderPhoneOutlineProps = typeof __propDef.props;
export type BlenderPhoneOutlineEvents = typeof __propDef.events;
export type BlenderPhoneOutlineSlots = typeof __propDef.slots;
export default class BlenderPhoneOutline extends SvelteComponentTyped<BlenderPhoneOutlineProps, BlenderPhoneOutlineEvents, BlenderPhoneOutlineSlots> {
}
export {};
