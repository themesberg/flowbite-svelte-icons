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
export type FileChartBarOutlineProps = typeof __propDef.props;
export type FileChartBarOutlineEvents = typeof __propDef.events;
export type FileChartBarOutlineSlots = typeof __propDef.slots;
export default class FileChartBarOutline extends SvelteComponentTyped<FileChartBarOutlineProps, FileChartBarOutlineEvents, FileChartBarOutlineSlots> {
}
export {};
