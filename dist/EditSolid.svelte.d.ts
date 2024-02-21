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
export type EditSolidProps = typeof __propDef.props;
export type EditSolidEvents = typeof __propDef.events;
export type EditSolidSlots = typeof __propDef.slots;
export default class EditSolid extends SvelteComponentTyped<EditSolidProps, EditSolidEvents, EditSolidSlots> {
}
export {};
