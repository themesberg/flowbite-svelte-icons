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
export type CodeOutlineProps = typeof __propDef.props;
export type CodeOutlineEvents = typeof __propDef.events;
export type CodeOutlineSlots = typeof __propDef.slots;
export default class CodeOutline extends SvelteComponentTyped<CodeOutlineProps, CodeOutlineEvents, CodeOutlineSlots> {
}
export {};
