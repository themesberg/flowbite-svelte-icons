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
export type PaperClipSolidProps = typeof __propDef.props;
export type PaperClipSolidEvents = typeof __propDef.events;
export type PaperClipSolidSlots = typeof __propDef.slots;
export default class PaperClipSolid extends SvelteComponentTyped<PaperClipSolidProps, PaperClipSolidEvents, PaperClipSolidSlots> {
}
export {};
