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
export type CaretDownSolidProps = typeof __propDef.props;
export type CaretDownSolidEvents = typeof __propDef.events;
export type CaretDownSolidSlots = typeof __propDef.slots;
export default class CaretDownSolid extends SvelteComponentTyped<CaretDownSolidProps, CaretDownSolidEvents, CaretDownSolidSlots> {
}
export {};
