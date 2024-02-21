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
export type FaceGrinSolidProps = typeof __propDef.props;
export type FaceGrinSolidEvents = typeof __propDef.events;
export type FaceGrinSolidSlots = typeof __propDef.slots;
export default class FaceGrinSolid extends SvelteComponentTyped<FaceGrinSolidProps, FaceGrinSolidEvents, FaceGrinSolidSlots> {
}
export {};
