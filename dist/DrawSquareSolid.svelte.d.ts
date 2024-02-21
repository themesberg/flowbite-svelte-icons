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
export type DrawSquareSolidProps = typeof __propDef.props;
export type DrawSquareSolidEvents = typeof __propDef.events;
export type DrawSquareSolidSlots = typeof __propDef.slots;
export default class DrawSquareSolid extends SvelteComponentTyped<DrawSquareSolidProps, DrawSquareSolidEvents, DrawSquareSolidSlots> {
}
export {};
