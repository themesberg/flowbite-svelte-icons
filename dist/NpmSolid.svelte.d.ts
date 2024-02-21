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
export type NpmSolidProps = typeof __propDef.props;
export type NpmSolidEvents = typeof __propDef.events;
export type NpmSolidSlots = typeof __propDef.slots;
export default class NpmSolid extends SvelteComponentTyped<NpmSolidProps, NpmSolidEvents, NpmSolidSlots> {
}
export {};
