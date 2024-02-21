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
export type FileMusicSolidProps = typeof __propDef.props;
export type FileMusicSolidEvents = typeof __propDef.events;
export type FileMusicSolidSlots = typeof __propDef.slots;
export default class FileMusicSolid extends SvelteComponentTyped<FileMusicSolidProps, FileMusicSolidEvents, FileMusicSolidSlots> {
}
export {};
