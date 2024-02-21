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
export type EuroSolidProps = typeof __propDef.props;
export type EuroSolidEvents = typeof __propDef.events;
export type EuroSolidSlots = typeof __propDef.slots;
export default class EuroSolid extends SvelteComponentTyped<EuroSolidProps, EuroSolidEvents, EuroSolidSlots> {
}
export {};
