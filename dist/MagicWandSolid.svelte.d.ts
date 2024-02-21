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
export type MagicWandSolidProps = typeof __propDef.props;
export type MagicWandSolidEvents = typeof __propDef.events;
export type MagicWandSolidSlots = typeof __propDef.slots;
export default class MagicWandSolid extends SvelteComponentTyped<MagicWandSolidProps, MagicWandSolidEvents, MagicWandSolidSlots> {
}
export {};
