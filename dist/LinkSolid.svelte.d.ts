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
export type LinkSolidProps = typeof __propDef.props;
export type LinkSolidEvents = typeof __propDef.events;
export type LinkSolidSlots = typeof __propDef.slots;
export default class LinkSolid extends SvelteComponentTyped<LinkSolidProps, LinkSolidEvents, LinkSolidSlots> {
}
export {};
