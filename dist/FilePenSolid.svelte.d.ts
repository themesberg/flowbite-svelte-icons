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
export type FilePenSolidProps = typeof __propDef.props;
export type FilePenSolidEvents = typeof __propDef.events;
export type FilePenSolidSlots = typeof __propDef.slots;
export default class FilePenSolid extends SvelteComponentTyped<FilePenSolidProps, FilePenSolidEvents, FilePenSolidSlots> {
}
export {};
