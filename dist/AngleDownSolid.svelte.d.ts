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
export type AngleDownSolidProps = typeof __propDef.props;
export type AngleDownSolidEvents = typeof __propDef.events;
export type AngleDownSolidSlots = typeof __propDef.slots;
export default class AngleDownSolid extends SvelteComponentTyped<AngleDownSolidProps, AngleDownSolidEvents, AngleDownSolidSlots> {
}
export {};
