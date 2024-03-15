import { SvelteComponent } from "svelte";
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
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'code pull request solid,';
 */
export default class CodePullRequestSolid extends SvelteComponent<CodePullRequestSolidProps, CodePullRequestSolidEvents, CodePullRequestSolidSlots> {
}
export {};
