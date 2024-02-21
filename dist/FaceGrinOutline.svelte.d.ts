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
export type FaceGrinOutlineProps = typeof __propDef.props;
export type FaceGrinOutlineEvents = typeof __propDef.events;
export type FaceGrinOutlineSlots = typeof __propDef.slots;
export default class FaceGrinOutline extends SvelteComponentTyped<FaceGrinOutlineProps, FaceGrinOutlineEvents, FaceGrinOutlineSlots> {
}
export {};
