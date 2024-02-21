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
export type CodePullRequestSolidProps = typeof __propDef.props;
export type CodePullRequestSolidEvents = typeof __propDef.events;
export type CodePullRequestSolidSlots = typeof __propDef.slots;
export default class CodePullRequestSolid extends SvelteComponentTyped<CodePullRequestSolidProps, CodePullRequestSolidEvents, CodePullRequestSolidSlots> {
}
export {};
