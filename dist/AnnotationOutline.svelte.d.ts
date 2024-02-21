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
export type AnnotationOutlineProps = typeof __propDef.props;
export type AnnotationOutlineEvents = typeof __propDef.events;
export type AnnotationOutlineSlots = typeof __propDef.slots;
export default class AnnotationOutline extends SvelteComponentTyped<AnnotationOutlineProps, AnnotationOutlineEvents, AnnotationOutlineSlots> {
}
export {};
