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
export type PaletteSolidProps = typeof __propDef.props;
export type PaletteSolidEvents = typeof __propDef.events;
export type PaletteSolidSlots = typeof __propDef.slots;
export default class PaletteSolid extends SvelteComponentTyped<PaletteSolidProps, PaletteSolidEvents, PaletteSolidSlots> {
}
export {};
