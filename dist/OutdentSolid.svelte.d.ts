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
export type OutdentSolidProps = typeof __propDef.props;
export type OutdentSolidEvents = typeof __propDef.events;
export type OutdentSolidSlots = typeof __propDef.slots;
export default class OutdentSolid extends SvelteComponentTyped<OutdentSolidProps, OutdentSolidEvents, OutdentSolidSlots> {
}
export {};
