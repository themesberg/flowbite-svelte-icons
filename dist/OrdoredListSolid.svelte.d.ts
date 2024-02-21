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
export type OrdoredListSolidProps = typeof __propDef.props;
export type OrdoredListSolidEvents = typeof __propDef.events;
export type OrdoredListSolidSlots = typeof __propDef.slots;
export default class OrdoredListSolid extends SvelteComponentTyped<OrdoredListSolidProps, OrdoredListSolidEvents, OrdoredListSolidSlots> {
}
export {};
