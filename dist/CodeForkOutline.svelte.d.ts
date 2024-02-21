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
export type CodeForkOutlineProps = typeof __propDef.props;
export type CodeForkOutlineEvents = typeof __propDef.events;
export type CodeForkOutlineSlots = typeof __propDef.slots;
export default class CodeForkOutline extends SvelteComponentTyped<CodeForkOutlineProps, CodeForkOutlineEvents, CodeForkOutlineSlots> {
}
export {};
