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
export type WindowRestoreSolidProps = typeof __propDef.props;
export type WindowRestoreSolidEvents = typeof __propDef.events;
export type WindowRestoreSolidSlots = typeof __propDef.slots;
export default class WindowRestoreSolid extends SvelteComponentTyped<WindowRestoreSolidProps, WindowRestoreSolidEvents, WindowRestoreSolidSlots> {
}
export {};
