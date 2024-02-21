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
export type StoreSolidProps = typeof __propDef.props;
export type StoreSolidEvents = typeof __propDef.events;
export type StoreSolidSlots = typeof __propDef.slots;
export default class StoreSolid extends SvelteComponentTyped<StoreSolidProps, StoreSolidEvents, StoreSolidSlots> {
}
export {};
