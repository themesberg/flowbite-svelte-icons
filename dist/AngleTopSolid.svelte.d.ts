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
export type AngleTopSolidProps = typeof __propDef.props;
export type AngleTopSolidEvents = typeof __propDef.events;
export type AngleTopSolidSlots = typeof __propDef.slots;
export default class AngleTopSolid extends SvelteComponentTyped<AngleTopSolidProps, AngleTopSolidEvents, AngleTopSolidSlots> {
}
export {};
