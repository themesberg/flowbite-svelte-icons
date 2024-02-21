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
export type CodeSolidProps = typeof __propDef.props;
export type CodeSolidEvents = typeof __propDef.events;
export type CodeSolidSlots = typeof __propDef.slots;
export default class CodeSolid extends SvelteComponentTyped<CodeSolidProps, CodeSolidEvents, CodeSolidSlots> {
}
export {};
