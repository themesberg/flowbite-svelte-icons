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
export type UploadOutlineProps = typeof __propDef.props;
export type UploadOutlineEvents = typeof __propDef.events;
export type UploadOutlineSlots = typeof __propDef.slots;
export default class UploadOutline extends SvelteComponentTyped<UploadOutlineProps, UploadOutlineEvents, UploadOutlineSlots> {
}
export {};
