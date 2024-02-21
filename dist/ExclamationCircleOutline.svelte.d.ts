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
export type ExclamationCircleOutlineProps = typeof __propDef.props;
export type ExclamationCircleOutlineEvents = typeof __propDef.events;
export type ExclamationCircleOutlineSlots = typeof __propDef.slots;
export default class ExclamationCircleOutline extends SvelteComponentTyped<ExclamationCircleOutlineProps, ExclamationCircleOutlineEvents, ExclamationCircleOutlineSlots> {
}
export {};
