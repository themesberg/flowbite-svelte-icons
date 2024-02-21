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
export type LandmarkSolidProps = typeof __propDef.props;
export type LandmarkSolidEvents = typeof __propDef.events;
export type LandmarkSolidSlots = typeof __propDef.slots;
export default class LandmarkSolid extends SvelteComponentTyped<LandmarkSolidProps, LandmarkSolidEvents, LandmarkSolidSlots> {
}
export {};
