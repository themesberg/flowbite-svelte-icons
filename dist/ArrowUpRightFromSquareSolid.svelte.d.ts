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
export type ArrowUpRightFromSquareSolidProps = typeof __propDef.props;
export type ArrowUpRightFromSquareSolidEvents = typeof __propDef.events;
export type ArrowUpRightFromSquareSolidSlots = typeof __propDef.slots;
export default class ArrowUpRightFromSquareSolid extends SvelteComponentTyped<ArrowUpRightFromSquareSolidProps, ArrowUpRightFromSquareSolidEvents, ArrowUpRightFromSquareSolidSlots> {
}
export {};
