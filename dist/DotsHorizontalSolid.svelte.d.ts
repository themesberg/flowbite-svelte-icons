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
export type DotsHorizontalSolidProps = typeof __propDef.props;
export type DotsHorizontalSolidEvents = typeof __propDef.events;
export type DotsHorizontalSolidSlots = typeof __propDef.slots;
export default class DotsHorizontalSolid extends SvelteComponentTyped<DotsHorizontalSolidProps, DotsHorizontalSolidEvents, DotsHorizontalSolidSlots> {
}
export {};
