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
export type AddressBookOutlineProps = typeof __propDef.props;
export type AddressBookOutlineEvents = typeof __propDef.events;
export type AddressBookOutlineSlots = typeof __propDef.slots;
export default class AddressBookOutline extends SvelteComponentTyped<AddressBookOutlineProps, AddressBookOutlineEvents, AddressBookOutlineSlots> {
}
export {};
