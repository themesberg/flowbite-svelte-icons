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
export type ClipboardListSolidProps = typeof __propDef.props;
export type ClipboardListSolidEvents = typeof __propDef.events;
export type ClipboardListSolidSlots = typeof __propDef.slots;
export default class ClipboardListSolid extends SvelteComponentTyped<ClipboardListSolidProps, ClipboardListSolidEvents, ClipboardListSolidSlots> {
}
export {};
