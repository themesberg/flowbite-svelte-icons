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
export type XCompanySolidProps = typeof __propDef.props;
export type XCompanySolidEvents = typeof __propDef.events;
export type XCompanySolidSlots = typeof __propDef.slots;
export default class XCompanySolid extends SvelteComponentTyped<XCompanySolidProps, XCompanySolidEvents, XCompanySolidSlots> {
}
export {};
