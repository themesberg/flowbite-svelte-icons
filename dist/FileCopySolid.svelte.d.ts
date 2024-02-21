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
export type FileCopySolidProps = typeof __propDef.props;
export type FileCopySolidEvents = typeof __propDef.events;
export type FileCopySolidSlots = typeof __propDef.slots;
export default class FileCopySolid extends SvelteComponentTyped<FileCopySolidProps, FileCopySolidEvents, FileCopySolidSlots> {
}
export {};
