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
export type QuestionCircleSolidProps = typeof __propDef.props;
export type QuestionCircleSolidEvents = typeof __propDef.events;
export type QuestionCircleSolidSlots = typeof __propDef.slots;
export default class QuestionCircleSolid extends SvelteComponentTyped<QuestionCircleSolidProps, QuestionCircleSolidEvents, QuestionCircleSolidSlots> {
}
export {};
