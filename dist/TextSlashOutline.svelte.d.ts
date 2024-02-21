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
export type TextSlashOutlineProps = typeof __propDef.props;
export type TextSlashOutlineEvents = typeof __propDef.events;
export type TextSlashOutlineSlots = typeof __propDef.slots;
export default class TextSlashOutline extends SvelteComponentTyped<TextSlashOutlineProps, TextSlashOutlineEvents, TextSlashOutlineSlots> {
}
export {};
