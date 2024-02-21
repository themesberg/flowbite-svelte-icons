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
export type CloudArrowUpSolidProps = typeof __propDef.props;
export type CloudArrowUpSolidEvents = typeof __propDef.events;
export type CloudArrowUpSolidSlots = typeof __propDef.slots;
export default class CloudArrowUpSolid extends SvelteComponentTyped<CloudArrowUpSolidProps, CloudArrowUpSolidEvents, CloudArrowUpSolidSlots> {
}
export {};
