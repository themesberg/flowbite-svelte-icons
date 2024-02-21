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
export type CaretLeftSolidProps = typeof __propDef.props;
export type CaretLeftSolidEvents = typeof __propDef.events;
export type CaretLeftSolidSlots = typeof __propDef.slots;
export default class CaretLeftSolid extends SvelteComponentTyped<CaretLeftSolidProps, CaretLeftSolidEvents, CaretLeftSolidSlots> {
}
export {};
