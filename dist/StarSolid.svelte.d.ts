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
export type StarSolidProps = typeof __propDef.props;
export type StarSolidEvents = typeof __propDef.events;
export type StarSolidSlots = typeof __propDef.slots;
export default class StarSolid extends SvelteComponentTyped<StarSolidProps, StarSolidEvents, StarSolidSlots> {
}
export {};
