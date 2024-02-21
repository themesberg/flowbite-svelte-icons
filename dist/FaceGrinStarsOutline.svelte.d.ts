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
export type FaceGrinStarsOutlineProps = typeof __propDef.props;
export type FaceGrinStarsOutlineEvents = typeof __propDef.events;
export type FaceGrinStarsOutlineSlots = typeof __propDef.slots;
export default class FaceGrinStarsOutline extends SvelteComponentTyped<FaceGrinStarsOutlineProps, FaceGrinStarsOutlineEvents, FaceGrinStarsOutlineSlots> {
}
export {};
