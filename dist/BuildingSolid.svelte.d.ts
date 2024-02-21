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
export type BuildingSolidProps = typeof __propDef.props;
export type BuildingSolidEvents = typeof __propDef.events;
export type BuildingSolidSlots = typeof __propDef.slots;
export default class BuildingSolid extends SvelteComponentTyped<BuildingSolidProps, BuildingSolidEvents, BuildingSolidSlots> {
}
export {};
