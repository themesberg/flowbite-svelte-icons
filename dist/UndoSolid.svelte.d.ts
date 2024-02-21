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
export type UndoSolidProps = typeof __propDef.props;
export type UndoSolidEvents = typeof __propDef.events;
export type UndoSolidSlots = typeof __propDef.slots;
export default class UndoSolid extends SvelteComponentTyped<UndoSolidProps, UndoSolidEvents, UndoSolidSlots> {
}
export {};
