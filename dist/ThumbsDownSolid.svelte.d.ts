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
export type ThumbsDownSolidProps = typeof __propDef.props;
export type ThumbsDownSolidEvents = typeof __propDef.events;
export type ThumbsDownSolidSlots = typeof __propDef.slots;
export default class ThumbsDownSolid extends SvelteComponentTyped<ThumbsDownSolidProps, ThumbsDownSolidEvents, ThumbsDownSolidSlots> {
}
export {};
