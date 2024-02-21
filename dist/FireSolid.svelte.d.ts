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
export type FireSolidProps = typeof __propDef.props;
export type FireSolidEvents = typeof __propDef.events;
export type FireSolidSlots = typeof __propDef.slots;
export default class FireSolid extends SvelteComponentTyped<FireSolidProps, FireSolidEvents, FireSolidSlots> {
}
export {};
