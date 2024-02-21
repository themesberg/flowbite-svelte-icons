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
export type FaceExplodeOutlineProps = typeof __propDef.props;
export type FaceExplodeOutlineEvents = typeof __propDef.events;
export type FaceExplodeOutlineSlots = typeof __propDef.slots;
export default class FaceExplodeOutline extends SvelteComponentTyped<FaceExplodeOutlineProps, FaceExplodeOutlineEvents, FaceExplodeOutlineSlots> {
}
export {};
