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
export type ArrowDownToBracketSolidProps = typeof __propDef.props;
export type ArrowDownToBracketSolidEvents = typeof __propDef.events;
export type ArrowDownToBracketSolidSlots = typeof __propDef.slots;
export default class ArrowDownToBracketSolid extends SvelteComponentTyped<ArrowDownToBracketSolidProps, ArrowDownToBracketSolidEvents, ArrowDownToBracketSolidSlots> {
}
export {};
