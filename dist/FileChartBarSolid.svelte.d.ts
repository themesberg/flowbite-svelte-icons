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
export type FileChartBarSolidProps = typeof __propDef.props;
export type FileChartBarSolidEvents = typeof __propDef.events;
export type FileChartBarSolidSlots = typeof __propDef.slots;
export default class FileChartBarSolid extends SvelteComponentTyped<FileChartBarSolidProps, FileChartBarSolidEvents, FileChartBarSolidSlots> {
}
export {};
