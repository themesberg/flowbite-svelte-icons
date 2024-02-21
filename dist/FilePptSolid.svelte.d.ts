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
export type FilePptSolidProps = typeof __propDef.props;
export type FilePptSolidEvents = typeof __propDef.events;
export type FilePptSolidSlots = typeof __propDef.slots;
export default class FilePptSolid extends SvelteComponentTyped<FilePptSolidProps, FilePptSolidEvents, FilePptSolidSlots> {
}
export {};
