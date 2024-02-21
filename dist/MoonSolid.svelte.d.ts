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
export type MoonSolidProps = typeof __propDef.props;
export type MoonSolidEvents = typeof __propDef.events;
export type MoonSolidSlots = typeof __propDef.slots;
export default class MoonSolid extends SvelteComponentTyped<MoonSolidProps, MoonSolidEvents, MoonSolidSlots> {
}
export {};
