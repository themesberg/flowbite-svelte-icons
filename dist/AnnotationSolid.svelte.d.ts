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
export type AnnotationSolidProps = typeof __propDef.props;
export type AnnotationSolidEvents = typeof __propDef.events;
export type AnnotationSolidSlots = typeof __propDef.slots;
export default class AnnotationSolid extends SvelteComponentTyped<AnnotationSolidProps, AnnotationSolidEvents, AnnotationSolidSlots> {
}
export {};
