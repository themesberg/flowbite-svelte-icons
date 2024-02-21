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
export type ReplySolidProps = typeof __propDef.props;
export type ReplySolidEvents = typeof __propDef.events;
export type ReplySolidSlots = typeof __propDef.slots;
export default class ReplySolid extends SvelteComponentTyped<ReplySolidProps, ReplySolidEvents, ReplySolidSlots> {
}
export {};
