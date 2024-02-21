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
export type TwitterSolidProps = typeof __propDef.props;
export type TwitterSolidEvents = typeof __propDef.events;
export type TwitterSolidSlots = typeof __propDef.slots;
export default class TwitterSolid extends SvelteComponentTyped<TwitterSolidProps, TwitterSolidEvents, TwitterSolidSlots> {
}
export {};
