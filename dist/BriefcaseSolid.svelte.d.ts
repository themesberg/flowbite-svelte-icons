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
export type BriefcaseSolidProps = typeof __propDef.props;
export type BriefcaseSolidEvents = typeof __propDef.events;
export type BriefcaseSolidSlots = typeof __propDef.slots;
export default class BriefcaseSolid extends SvelteComponentTyped<BriefcaseSolidProps, BriefcaseSolidEvents, BriefcaseSolidSlots> {
}
export {};
