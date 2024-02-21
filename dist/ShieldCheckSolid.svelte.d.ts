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
export type ShieldCheckSolidProps = typeof __propDef.props;
export type ShieldCheckSolidEvents = typeof __propDef.events;
export type ShieldCheckSolidSlots = typeof __propDef.slots;
export default class ShieldCheckSolid extends SvelteComponentTyped<ShieldCheckSolidProps, ShieldCheckSolidEvents, ShieldCheckSolidSlots> {
}
export {};
