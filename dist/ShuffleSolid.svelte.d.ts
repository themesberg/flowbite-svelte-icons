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
export type ShuffleSolidProps = typeof __propDef.props;
export type ShuffleSolidEvents = typeof __propDef.events;
export type ShuffleSolidSlots = typeof __propDef.slots;
export default class ShuffleSolid extends SvelteComponentTyped<ShuffleSolidProps, ShuffleSolidEvents, ShuffleSolidSlots> {
}
export {};
