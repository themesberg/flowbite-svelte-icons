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
export type LabelSolidProps = typeof __propDef.props;
export type LabelSolidEvents = typeof __propDef.events;
export type LabelSolidSlots = typeof __propDef.slots;
export default class LabelSolid extends SvelteComponentTyped<LabelSolidProps, LabelSolidEvents, LabelSolidSlots> {
}
export {};
