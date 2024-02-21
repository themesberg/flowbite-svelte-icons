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
export type CaretUpSolidProps = typeof __propDef.props;
export type CaretUpSolidEvents = typeof __propDef.events;
export type CaretUpSolidSlots = typeof __propDef.slots;
export default class CaretUpSolid extends SvelteComponentTyped<CaretUpSolidProps, CaretUpSolidEvents, CaretUpSolidSlots> {
}
export {};
