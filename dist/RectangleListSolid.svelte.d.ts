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
export type RectangleListSolidProps = typeof __propDef.props;
export type RectangleListSolidEvents = typeof __propDef.events;
export type RectangleListSolidSlots = typeof __propDef.slots;
export default class RectangleListSolid extends SvelteComponentTyped<RectangleListSolidProps, RectangleListSolidEvents, RectangleListSolidSlots> {
}
export {};
