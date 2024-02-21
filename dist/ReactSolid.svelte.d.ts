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
export type ReactSolidProps = typeof __propDef.props;
export type ReactSolidEvents = typeof __propDef.events;
export type ReactSolidSlots = typeof __propDef.slots;
export default class ReactSolid extends SvelteComponentTyped<ReactSolidProps, ReactSolidEvents, ReactSolidSlots> {
}
export {};
