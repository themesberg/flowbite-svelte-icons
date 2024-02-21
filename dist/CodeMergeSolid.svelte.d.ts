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
export type CodeMergeSolidProps = typeof __propDef.props;
export type CodeMergeSolidEvents = typeof __propDef.events;
export type CodeMergeSolidSlots = typeof __propDef.slots;
export default class CodeMergeSolid extends SvelteComponentTyped<CodeMergeSolidProps, CodeMergeSolidEvents, CodeMergeSolidSlots> {
}
export {};
