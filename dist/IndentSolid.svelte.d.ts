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
export type IndentSolidProps = typeof __propDef.props;
export type IndentSolidEvents = typeof __propDef.events;
export type IndentSolidSlots = typeof __propDef.slots;
export default class IndentSolid extends SvelteComponentTyped<IndentSolidProps, IndentSolidEvents, IndentSolidSlots> {
}
export {};
