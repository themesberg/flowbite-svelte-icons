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
export type GithubSolidProps = typeof __propDef.props;
export type GithubSolidEvents = typeof __propDef.events;
export type GithubSolidSlots = typeof __propDef.slots;
export default class GithubSolid extends SvelteComponentTyped<GithubSolidProps, GithubSolidEvents, GithubSolidSlots> {
}
export {};
