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
export type BellRingSolidProps = typeof __propDef.props;
export type BellRingSolidEvents = typeof __propDef.events;
export type BellRingSolidSlots = typeof __propDef.slots;
export default class BellRingSolid extends SvelteComponentTyped<BellRingSolidProps, BellRingSolidEvents, BellRingSolidSlots> {
}
export {};
