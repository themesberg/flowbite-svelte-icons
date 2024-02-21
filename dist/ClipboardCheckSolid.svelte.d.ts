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
export type ClipboardCheckSolidProps = typeof __propDef.props;
export type ClipboardCheckSolidEvents = typeof __propDef.events;
export type ClipboardCheckSolidSlots = typeof __propDef.slots;
export default class ClipboardCheckSolid extends SvelteComponentTyped<ClipboardCheckSolidProps, ClipboardCheckSolidEvents, ClipboardCheckSolidSlots> {
}
export {};
