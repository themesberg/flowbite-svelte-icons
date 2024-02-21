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
export type ReplyAllSolidProps = typeof __propDef.props;
export type ReplyAllSolidEvents = typeof __propDef.events;
export type ReplyAllSolidSlots = typeof __propDef.slots;
export default class ReplyAllSolid extends SvelteComponentTyped<ReplyAllSolidProps, ReplyAllSolidEvents, ReplyAllSolidSlots> {
}
export {};
