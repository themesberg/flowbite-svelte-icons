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
export type NewspapperSolidProps = typeof __propDef.props;
export type NewspapperSolidEvents = typeof __propDef.events;
export type NewspapperSolidSlots = typeof __propDef.slots;
export default class NewspapperSolid extends SvelteComponentTyped<NewspapperSolidProps, NewspapperSolidEvents, NewspapperSolidSlots> {
}
export {};
