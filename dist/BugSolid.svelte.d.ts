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
export type BugSolidProps = typeof __propDef.props;
export type BugSolidEvents = typeof __propDef.events;
export type BugSolidSlots = typeof __propDef.slots;
export default class BugSolid extends SvelteComponentTyped<BugSolidProps, BugSolidEvents, BugSolidSlots> {
}
export {};
