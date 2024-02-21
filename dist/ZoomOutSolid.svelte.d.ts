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
export type ZoomOutSolidProps = typeof __propDef.props;
export type ZoomOutSolidEvents = typeof __propDef.events;
export type ZoomOutSolidSlots = typeof __propDef.slots;
export default class ZoomOutSolid extends SvelteComponentTyped<ZoomOutSolidProps, ZoomOutSolidEvents, ZoomOutSolidSlots> {
}
export {};
