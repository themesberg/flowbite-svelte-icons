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
export type AngleLeftSolidProps = typeof __propDef.props;
export type AngleLeftSolidEvents = typeof __propDef.events;
export type AngleLeftSolidSlots = typeof __propDef.slots;
export default class AngleLeftSolid extends SvelteComponentTyped<AngleLeftSolidProps, AngleLeftSolidEvents, AngleLeftSolidSlots> {
}
export {};
