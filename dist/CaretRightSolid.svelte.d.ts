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
export type CaretRightSolidProps = typeof __propDef.props;
export type CaretRightSolidEvents = typeof __propDef.events;
export type CaretRightSolidSlots = typeof __propDef.slots;
export default class CaretRightSolid extends SvelteComponentTyped<CaretRightSolidProps, CaretRightSolidEvents, CaretRightSolidSlots> {
}
export {};
