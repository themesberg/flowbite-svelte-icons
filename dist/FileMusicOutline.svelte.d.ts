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
export type FileMusicOutlineProps = typeof __propDef.props;
export type FileMusicOutlineEvents = typeof __propDef.events;
export type FileMusicOutlineSlots = typeof __propDef.slots;
export default class FileMusicOutline extends SvelteComponentTyped<FileMusicOutlineProps, FileMusicOutlineEvents, FileMusicOutlineSlots> {
}
export {};
