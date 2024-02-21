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
export type InfoCircleOutlineProps = typeof __propDef.props;
export type InfoCircleOutlineEvents = typeof __propDef.events;
export type InfoCircleOutlineSlots = typeof __propDef.slots;
export default class InfoCircleOutline extends SvelteComponentTyped<InfoCircleOutlineProps, InfoCircleOutlineEvents, InfoCircleOutlineSlots> {
}
export {};
