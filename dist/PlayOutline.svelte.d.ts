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
export type PlayOutlineProps = typeof __propDef.props;
export type PlayOutlineEvents = typeof __propDef.events;
export type PlayOutlineSlots = typeof __propDef.slots;
export default class PlayOutline extends SvelteComponentTyped<PlayOutlineProps, PlayOutlineEvents, PlayOutlineSlots> {
}
export {};
