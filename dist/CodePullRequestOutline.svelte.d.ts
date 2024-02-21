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
export type CodePullRequestOutlineProps = typeof __propDef.props;
export type CodePullRequestOutlineEvents = typeof __propDef.events;
export type CodePullRequestOutlineSlots = typeof __propDef.slots;
export default class CodePullRequestOutline extends SvelteComponentTyped<CodePullRequestOutlineProps, CodePullRequestOutlineEvents, CodePullRequestOutlineSlots> {
}
export {};
