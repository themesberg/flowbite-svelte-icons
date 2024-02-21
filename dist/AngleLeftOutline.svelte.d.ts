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
export type AngleLeftOutlineProps = typeof __propDef.props;
export type AngleLeftOutlineEvents = typeof __propDef.events;
export type AngleLeftOutlineSlots = typeof __propDef.slots;
export default class AngleLeftOutline extends SvelteComponentTyped<AngleLeftOutlineProps, AngleLeftOutlineEvents, AngleLeftOutlineSlots> {
}
export {};
