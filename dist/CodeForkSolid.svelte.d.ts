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
export type CodeForkSolidProps = typeof __propDef.props;
export type CodeForkSolidEvents = typeof __propDef.events;
export type CodeForkSolidSlots = typeof __propDef.slots;
export default class CodeForkSolid extends SvelteComponentTyped<CodeForkSolidProps, CodeForkSolidEvents, CodeForkSolidSlots> {
}
export {};
