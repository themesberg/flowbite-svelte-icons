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
export type ListMusicOutlineProps = typeof __propDef.props;
export type ListMusicOutlineEvents = typeof __propDef.events;
export type ListMusicOutlineSlots = typeof __propDef.slots;
export default class ListMusicOutline extends SvelteComponentTyped<ListMusicOutlineProps, ListMusicOutlineEvents, ListMusicOutlineSlots> {
}
export {};
