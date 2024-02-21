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
export type XCircleSolidProps = typeof __propDef.props;
export type XCircleSolidEvents = typeof __propDef.events;
export type XCircleSolidSlots = typeof __propDef.slots;
export default class XCircleSolid extends SvelteComponentTyped<XCircleSolidProps, XCircleSolidEvents, XCircleSolidSlots> {
}
export {};
