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
export type ClipboardSolidProps = typeof __propDef.props;
export type ClipboardSolidEvents = typeof __propDef.events;
export type ClipboardSolidSlots = typeof __propDef.slots;
export default class ClipboardSolid extends SvelteComponentTyped<ClipboardSolidProps, ClipboardSolidEvents, ClipboardSolidSlots> {
}
export {};
