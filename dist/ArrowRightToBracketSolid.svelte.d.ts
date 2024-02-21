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
export type ArrowRightToBracketSolidProps = typeof __propDef.props;
export type ArrowRightToBracketSolidEvents = typeof __propDef.events;
export type ArrowRightToBracketSolidSlots = typeof __propDef.slots;
export default class ArrowRightToBracketSolid extends SvelteComponentTyped<ArrowRightToBracketSolidProps, ArrowRightToBracketSolidEvents, ArrowRightToBracketSolidSlots> {
}
export {};
