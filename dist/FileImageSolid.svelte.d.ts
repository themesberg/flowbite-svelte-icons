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
export type FileImageSolidProps = typeof __propDef.props;
export type FileImageSolidEvents = typeof __propDef.events;
export type FileImageSolidSlots = typeof __propDef.slots;
export default class FileImageSolid extends SvelteComponentTyped<FileImageSolidProps, FileImageSolidEvents, FileImageSolidSlots> {
}
export {};
