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
export type StarHalfStrokeSolidProps = typeof __propDef.props;
export type StarHalfStrokeSolidEvents = typeof __propDef.events;
export type StarHalfStrokeSolidSlots = typeof __propDef.slots;
export default class StarHalfStrokeSolid extends SvelteComponentTyped<StarHalfStrokeSolidProps, StarHalfStrokeSolidEvents, StarHalfStrokeSolidSlots> {
}
export {};
