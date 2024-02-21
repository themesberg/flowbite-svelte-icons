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
export type CodeBranchSolidProps = typeof __propDef.props;
export type CodeBranchSolidEvents = typeof __propDef.events;
export type CodeBranchSolidSlots = typeof __propDef.slots;
export default class CodeBranchSolid extends SvelteComponentTyped<CodeBranchSolidProps, CodeBranchSolidEvents, CodeBranchSolidSlots> {
}
export {};
