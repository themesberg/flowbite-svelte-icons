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
export type HomeSolidProps = typeof __propDef.props;
export type HomeSolidEvents = typeof __propDef.events;
export type HomeSolidSlots = typeof __propDef.slots;
export default class HomeSolid extends SvelteComponentTyped<HomeSolidProps, HomeSolidEvents, HomeSolidSlots> {
}
export {};
