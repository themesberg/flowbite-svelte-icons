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
export type FaceLaughSolidProps = typeof __propDef.props;
export type FaceLaughSolidEvents = typeof __propDef.events;
export type FaceLaughSolidSlots = typeof __propDef.slots;
export default class FaceLaughSolid extends SvelteComponentTyped<FaceLaughSolidProps, FaceLaughSolidEvents, FaceLaughSolidSlots> {
}
export {};
