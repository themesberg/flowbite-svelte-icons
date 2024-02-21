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
export type ThumbsUpSolidProps = typeof __propDef.props;
export type ThumbsUpSolidEvents = typeof __propDef.events;
export type ThumbsUpSolidSlots = typeof __propDef.slots;
export default class ThumbsUpSolid extends SvelteComponentTyped<ThumbsUpSolidProps, ThumbsUpSolidEvents, ThumbsUpSolidSlots> {
}
export {};
