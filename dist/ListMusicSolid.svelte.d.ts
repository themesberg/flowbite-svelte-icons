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
export type ListMusicSolidProps = typeof __propDef.props;
export type ListMusicSolidEvents = typeof __propDef.events;
export type ListMusicSolidSlots = typeof __propDef.slots;
export default class ListMusicSolid extends SvelteComponentTyped<ListMusicSolidProps, ListMusicSolidEvents, ListMusicSolidSlots> {
}
export {};
