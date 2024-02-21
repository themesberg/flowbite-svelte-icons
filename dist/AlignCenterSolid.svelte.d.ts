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
export type AlignCenterSolidProps = typeof __propDef.props;
export type AlignCenterSolidEvents = typeof __propDef.events;
export type AlignCenterSolidSlots = typeof __propDef.slots;
export default class AlignCenterSolid extends SvelteComponentTyped<AlignCenterSolidProps, AlignCenterSolidEvents, AlignCenterSolidSlots> {
}
export {};
