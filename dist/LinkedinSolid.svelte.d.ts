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
export type LinkedinSolidProps = typeof __propDef.props;
export type LinkedinSolidEvents = typeof __propDef.events;
export type LinkedinSolidSlots = typeof __propDef.slots;
export default class LinkedinSolid extends SvelteComponentTyped<LinkedinSolidProps, LinkedinSolidEvents, LinkedinSolidSlots> {
}
export {};
