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
export type HeartSolidProps = typeof __propDef.props;
export type HeartSolidEvents = typeof __propDef.events;
export type HeartSolidSlots = typeof __propDef.slots;
export default class HeartSolid extends SvelteComponentTyped<HeartSolidProps, HeartSolidEvents, HeartSolidSlots> {
}
export {};
