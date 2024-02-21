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
export type ArchiveSolidProps = typeof __propDef.props;
export type ArchiveSolidEvents = typeof __propDef.events;
export type ArchiveSolidSlots = typeof __propDef.slots;
export default class ArchiveSolid extends SvelteComponentTyped<ArchiveSolidProps, ArchiveSolidEvents, ArchiveSolidSlots> {
}
export {};
