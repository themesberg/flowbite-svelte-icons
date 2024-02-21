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
export type BellActiveAltSolidProps = typeof __propDef.props;
export type BellActiveAltSolidEvents = typeof __propDef.events;
export type BellActiveAltSolidSlots = typeof __propDef.slots;
export default class BellActiveAltSolid extends SvelteComponentTyped<BellActiveAltSolidProps, BellActiveAltSolidEvents, BellActiveAltSolidSlots> {
}
export {};
