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
export type DownloadSolidProps = typeof __propDef.props;
export type DownloadSolidEvents = typeof __propDef.events;
export type DownloadSolidSlots = typeof __propDef.slots;
export default class DownloadSolid extends SvelteComponentTyped<DownloadSolidProps, DownloadSolidEvents, DownloadSolidSlots> {
}
export {};
