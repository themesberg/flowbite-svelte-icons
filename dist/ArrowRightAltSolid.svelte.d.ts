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
export type ArrowRightAltSolidProps = typeof __propDef.props;
export type ArrowRightAltSolidEvents = typeof __propDef.events;
export type ArrowRightAltSolidSlots = typeof __propDef.slots;
export default class ArrowRightAltSolid extends SvelteComponentTyped<ArrowRightAltSolidProps, ArrowRightAltSolidEvents, ArrowRightAltSolidSlots> {
}
export {};
