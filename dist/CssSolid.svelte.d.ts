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
export type CssSolidProps = typeof __propDef.props;
export type CssSolidEvents = typeof __propDef.events;
export type CssSolidSlots = typeof __propDef.slots;
export default class CssSolid extends SvelteComponentTyped<CssSolidProps, CssSolidEvents, CssSolidSlots> {
}
export {};
