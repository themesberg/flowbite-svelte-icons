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
export type CaretDownOutlineProps = typeof __propDef.props;
export type CaretDownOutlineEvents = typeof __propDef.events;
export type CaretDownOutlineSlots = typeof __propDef.slots;
export default class CaretDownOutline extends SvelteComponentTyped<CaretDownOutlineProps, CaretDownOutlineEvents, CaretDownOutlineSlots> {
}
export {};
