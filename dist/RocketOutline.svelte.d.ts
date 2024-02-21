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
export type RocketOutlineProps = typeof __propDef.props;
export type RocketOutlineEvents = typeof __propDef.events;
export type RocketOutlineSlots = typeof __propDef.slots;
export default class RocketOutline extends SvelteComponentTyped<RocketOutlineProps, RocketOutlineEvents, RocketOutlineSlots> {
}
export {};
