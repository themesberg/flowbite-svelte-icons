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
export type SwatchbookSolidProps = typeof __propDef.props;
export type SwatchbookSolidEvents = typeof __propDef.events;
export type SwatchbookSolidSlots = typeof __propDef.slots;
export default class SwatchbookSolid extends SvelteComponentTyped<SwatchbookSolidProps, SwatchbookSolidEvents, SwatchbookSolidSlots> {
}
export {};
