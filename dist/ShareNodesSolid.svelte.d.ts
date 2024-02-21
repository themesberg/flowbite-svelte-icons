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
export type ShareNodesSolidProps = typeof __propDef.props;
export type ShareNodesSolidEvents = typeof __propDef.events;
export type ShareNodesSolidSlots = typeof __propDef.slots;
export default class ShareNodesSolid extends SvelteComponentTyped<ShareNodesSolidProps, ShareNodesSolidEvents, ShareNodesSolidSlots> {
}
export {};
