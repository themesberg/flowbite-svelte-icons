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
export type DownloadOutlineProps = typeof __propDef.props;
export type DownloadOutlineEvents = typeof __propDef.events;
export type DownloadOutlineSlots = typeof __propDef.slots;
export default class DownloadOutline extends SvelteComponentTyped<DownloadOutlineProps, DownloadOutlineEvents, DownloadOutlineSlots> {
}
export {};
