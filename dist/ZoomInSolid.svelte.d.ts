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
export type ZoomInSolidProps = typeof __propDef.props;
export type ZoomInSolidEvents = typeof __propDef.events;
export type ZoomInSolidSlots = typeof __propDef.slots;
export default class ZoomInSolid extends SvelteComponentTyped<ZoomInSolidProps, ZoomInSolidEvents, ZoomInSolidSlots> {
}
export {};
