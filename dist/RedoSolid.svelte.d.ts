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
export type RedoSolidProps = typeof __propDef.props;
export type RedoSolidEvents = typeof __propDef.events;
export type RedoSolidSlots = typeof __propDef.slots;
export default class RedoSolid extends SvelteComponentTyped<RedoSolidProps, RedoSolidEvents, RedoSolidSlots> {
}
export {};
