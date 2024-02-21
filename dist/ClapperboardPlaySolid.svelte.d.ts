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
export type ClapperboardPlaySolidProps = typeof __propDef.props;
export type ClapperboardPlaySolidEvents = typeof __propDef.events;
export type ClapperboardPlaySolidSlots = typeof __propDef.slots;
export default class ClapperboardPlaySolid extends SvelteComponentTyped<ClapperboardPlaySolidProps, ClapperboardPlaySolidEvents, ClapperboardPlaySolidSlots> {
}
export {};
