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
export type AddressBookSolidProps = typeof __propDef.props;
export type AddressBookSolidEvents = typeof __propDef.events;
export type AddressBookSolidSlots = typeof __propDef.slots;
export default class AddressBookSolid extends SvelteComponentTyped<AddressBookSolidProps, AddressBookSolidEvents, AddressBookSolidSlots> {
}
export {};
