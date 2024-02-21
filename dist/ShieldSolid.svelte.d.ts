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
export type ShieldSolidProps = typeof __propDef.props;
export type ShieldSolidEvents = typeof __propDef.events;
export type ShieldSolidSlots = typeof __propDef.slots;
export default class ShieldSolid extends SvelteComponentTyped<ShieldSolidProps, ShieldSolidEvents, ShieldSolidSlots> {
}
export {};
