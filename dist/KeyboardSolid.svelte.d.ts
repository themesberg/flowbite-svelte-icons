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
export type KeyboardSolidProps = typeof __propDef.props;
export type KeyboardSolidEvents = typeof __propDef.events;
export type KeyboardSolidSlots = typeof __propDef.slots;
export default class KeyboardSolid extends SvelteComponentTyped<KeyboardSolidProps, KeyboardSolidEvents, KeyboardSolidSlots> {
}
export {};
