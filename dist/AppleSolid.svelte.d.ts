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
export type AppleSolidProps = typeof __propDef.props;
export type AppleSolidEvents = typeof __propDef.events;
export type AppleSolidSlots = typeof __propDef.slots;
export default class AppleSolid extends SvelteComponentTyped<AppleSolidProps, AppleSolidEvents, AppleSolidSlots> {
}
export {};
