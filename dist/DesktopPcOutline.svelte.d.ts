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
export type DesktopPcOutlineProps = typeof __propDef.props;
export type DesktopPcOutlineEvents = typeof __propDef.events;
export type DesktopPcOutlineSlots = typeof __propDef.slots;
export default class DesktopPcOutline extends SvelteComponentTyped<DesktopPcOutlineProps, DesktopPcOutlineEvents, DesktopPcOutlineSlots> {
}
export {};
