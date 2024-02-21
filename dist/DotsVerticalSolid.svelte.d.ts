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
export type DotsVerticalSolidProps = typeof __propDef.props;
export type DotsVerticalSolidEvents = typeof __propDef.events;
export type DotsVerticalSolidSlots = typeof __propDef.slots;
export default class DotsVerticalSolid extends SvelteComponentTyped<DotsVerticalSolidProps, DotsVerticalSolidEvents, DotsVerticalSolidSlots> {
}
export {};
