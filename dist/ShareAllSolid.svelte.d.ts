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
export type ShareAllSolidProps = typeof __propDef.props;
export type ShareAllSolidEvents = typeof __propDef.events;
export type ShareAllSolidSlots = typeof __propDef.slots;
export default class ShareAllSolid extends SvelteComponentTyped<ShareAllSolidProps, ShareAllSolidEvents, ShareAllSolidSlots> {
}
export {};
