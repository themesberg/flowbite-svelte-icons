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
export type CodeBranchOutlineProps = typeof __propDef.props;
export type CodeBranchOutlineEvents = typeof __propDef.events;
export type CodeBranchOutlineSlots = typeof __propDef.slots;
export default class CodeBranchOutline extends SvelteComponentTyped<CodeBranchOutlineProps, CodeBranchOutlineEvents, CodeBranchOutlineSlots> {
}
export {};
