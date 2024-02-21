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
export type ClapperboardPlayOutlineProps = typeof __propDef.props;
export type ClapperboardPlayOutlineEvents = typeof __propDef.events;
export type ClapperboardPlayOutlineSlots = typeof __propDef.slots;
export default class ClapperboardPlayOutline extends SvelteComponentTyped<ClapperboardPlayOutlineProps, ClapperboardPlayOutlineEvents, ClapperboardPlayOutlineSlots> {
}
export {};
