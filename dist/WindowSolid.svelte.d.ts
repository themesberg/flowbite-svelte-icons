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
export type WindowSolidProps = typeof __propDef.props;
export type WindowSolidEvents = typeof __propDef.events;
export type WindowSolidSlots = typeof __propDef.slots;
export default class WindowSolid extends SvelteComponentTyped<WindowSolidProps, WindowSolidEvents, WindowSolidSlots> {
}
export {};
