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
export type ArrowRightSolidProps = typeof __propDef.props;
export type ArrowRightSolidEvents = typeof __propDef.events;
export type ArrowRightSolidSlots = typeof __propDef.slots;
export default class ArrowRightSolid extends SvelteComponentTyped<ArrowRightSolidProps, ArrowRightSolidEvents, ArrowRightSolidSlots> {
}
export {};
