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
export type FileCsvSolidProps = typeof __propDef.props;
export type FileCsvSolidEvents = typeof __propDef.events;
export type FileCsvSolidSlots = typeof __propDef.slots;
export default class FileCsvSolid extends SvelteComponentTyped<FileCsvSolidProps, FileCsvSolidEvents, FileCsvSolidSlots> {
}
export {};
