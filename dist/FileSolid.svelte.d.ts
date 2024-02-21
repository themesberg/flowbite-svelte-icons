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
export type FileSolidProps = typeof __propDef.props;
export type FileSolidEvents = typeof __propDef.events;
export type FileSolidSlots = typeof __propDef.slots;
export default class FileSolid extends SvelteComponentTyped<FileSolidProps, FileSolidEvents, FileSolidSlots> {
}
export {};
