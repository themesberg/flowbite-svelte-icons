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
export type XCircleOutlineProps = typeof __propDef.props;
export type XCircleOutlineEvents = typeof __propDef.events;
export type XCircleOutlineSlots = typeof __propDef.slots;
export default class XCircleOutline extends SvelteComponentTyped<XCircleOutlineProps, XCircleOutlineEvents, XCircleOutlineSlots> {
}
export {};
