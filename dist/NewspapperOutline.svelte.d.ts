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
export type NewspapperOutlineProps = typeof __propDef.props;
export type NewspapperOutlineEvents = typeof __propDef.events;
export type NewspapperOutlineSlots = typeof __propDef.slots;
export default class NewspapperOutline extends SvelteComponentTyped<NewspapperOutlineProps, NewspapperOutlineEvents, NewspapperOutlineSlots> {
}
export {};
