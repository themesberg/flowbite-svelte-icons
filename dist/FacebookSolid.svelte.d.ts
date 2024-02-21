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
export type FacebookSolidProps = typeof __propDef.props;
export type FacebookSolidEvents = typeof __propDef.events;
export type FacebookSolidSlots = typeof __propDef.slots;
export default class FacebookSolid extends SvelteComponentTyped<FacebookSolidProps, FacebookSolidEvents, FacebookSolidSlots> {
}
export {};
