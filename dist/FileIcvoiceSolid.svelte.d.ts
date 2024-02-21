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
export type FileIcvoiceSolidProps = typeof __propDef.props;
export type FileIcvoiceSolidEvents = typeof __propDef.events;
export type FileIcvoiceSolidSlots = typeof __propDef.slots;
export default class FileIcvoiceSolid extends SvelteComponentTyped<FileIcvoiceSolidProps, FileIcvoiceSolidEvents, FileIcvoiceSolidSlots> {
}
export {};
