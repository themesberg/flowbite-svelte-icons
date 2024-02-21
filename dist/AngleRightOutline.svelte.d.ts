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
export type AngleRightOutlineProps = typeof __propDef.props;
export type AngleRightOutlineEvents = typeof __propDef.events;
export type AngleRightOutlineSlots = typeof __propDef.slots;
export default class AngleRightOutline extends SvelteComponentTyped<AngleRightOutlineProps, AngleRightOutlineEvents, AngleRightOutlineSlots> {
}
export {};
