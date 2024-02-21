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
export type QuestionCircleOutlineProps = typeof __propDef.props;
export type QuestionCircleOutlineEvents = typeof __propDef.events;
export type QuestionCircleOutlineSlots = typeof __propDef.slots;
export default class QuestionCircleOutline extends SvelteComponentTyped<QuestionCircleOutlineProps, QuestionCircleOutlineEvents, QuestionCircleOutlineSlots> {
}
export {};
