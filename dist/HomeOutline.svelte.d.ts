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
export type HomeOutlineProps = typeof __propDef.props;
export type HomeOutlineEvents = typeof __propDef.events;
export type HomeOutlineSlots = typeof __propDef.slots;
export default class HomeOutline extends SvelteComponentTyped<HomeOutlineProps, HomeOutlineEvents, HomeOutlineSlots> {
}
export {};
