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
export type OrdoredListOutlineProps = typeof __propDef.props;
export type OrdoredListOutlineEvents = typeof __propDef.events;
export type OrdoredListOutlineSlots = typeof __propDef.slots;
export default class OrdoredListOutline extends SvelteComponentTyped<OrdoredListOutlineProps, OrdoredListOutlineEvents, OrdoredListOutlineSlots> {
}
export {};
