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
export type DropboxSolidProps = typeof __propDef.props;
export type DropboxSolidEvents = typeof __propDef.events;
export type DropboxSolidSlots = typeof __propDef.slots;
export default class DropboxSolid extends SvelteComponentTyped<DropboxSolidProps, DropboxSolidEvents, DropboxSolidSlots> {
}
export {};
