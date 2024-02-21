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
export type GlobeSolidProps = typeof __propDef.props;
export type GlobeSolidEvents = typeof __propDef.events;
export type GlobeSolidSlots = typeof __propDef.slots;
export default class GlobeSolid extends SvelteComponentTyped<GlobeSolidProps, GlobeSolidEvents, GlobeSolidSlots> {
}
export {};
