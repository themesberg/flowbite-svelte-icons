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
export type FileCirclePlusSolidProps = typeof __propDef.props;
export type FileCirclePlusSolidEvents = typeof __propDef.events;
export type FileCirclePlusSolidSlots = typeof __propDef.slots;
export default class FileCirclePlusSolid extends SvelteComponentTyped<FileCirclePlusSolidProps, FileCirclePlusSolidEvents, FileCirclePlusSolidSlots> {
}
export {};
