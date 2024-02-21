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
export type CodeMergeOutlineProps = typeof __propDef.props;
export type CodeMergeOutlineEvents = typeof __propDef.events;
export type CodeMergeOutlineSlots = typeof __propDef.slots;
export default class CodeMergeOutline extends SvelteComponentTyped<CodeMergeOutlineProps, CodeMergeOutlineEvents, CodeMergeOutlineSlots> {
}
export {};
