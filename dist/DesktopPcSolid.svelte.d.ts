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
export type DesktopPcSolidProps = typeof __propDef.props;
export type DesktopPcSolidEvents = typeof __propDef.events;
export type DesktopPcSolidSlots = typeof __propDef.slots;
export default class DesktopPcSolid extends SvelteComponentTyped<DesktopPcSolidProps, DesktopPcSolidEvents, DesktopPcSolidSlots> {
}
export {};
