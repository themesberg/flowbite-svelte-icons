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
export type CogSolidProps = typeof __propDef.props;
export type CogSolidEvents = typeof __propDef.events;
export type CogSolidSlots = typeof __propDef.slots;
export default class CogSolid extends SvelteComponentTyped<CogSolidProps, CogSolidEvents, CogSolidSlots> {
}
export {};
