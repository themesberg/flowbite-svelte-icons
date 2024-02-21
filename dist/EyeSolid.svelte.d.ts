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
export type EyeSolidProps = typeof __propDef.props;
export type EyeSolidEvents = typeof __propDef.events;
export type EyeSolidSlots = typeof __propDef.slots;
export default class EyeSolid extends SvelteComponentTyped<EyeSolidProps, EyeSolidEvents, EyeSolidSlots> {
}
export {};
