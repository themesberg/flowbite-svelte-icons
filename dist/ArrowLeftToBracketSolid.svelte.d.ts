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
export type ArrowLeftToBracketSolidProps = typeof __propDef.props;
export type ArrowLeftToBracketSolidEvents = typeof __propDef.events;
export type ArrowLeftToBracketSolidSlots = typeof __propDef.slots;
export default class ArrowLeftToBracketSolid extends SvelteComponentTyped<ArrowLeftToBracketSolidProps, ArrowLeftToBracketSolidEvents, ArrowLeftToBracketSolidSlots> {
}
export {};
