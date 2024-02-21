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
export type PaletteOutlineProps = typeof __propDef.props;
export type PaletteOutlineEvents = typeof __propDef.events;
export type PaletteOutlineSlots = typeof __propDef.slots;
export default class PaletteOutline extends SvelteComponentTyped<PaletteOutlineProps, PaletteOutlineEvents, PaletteOutlineSlots> {
}
export {};
