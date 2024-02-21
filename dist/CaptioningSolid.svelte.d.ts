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
export type CaptioningSolidProps = typeof __propDef.props;
export type CaptioningSolidEvents = typeof __propDef.events;
export type CaptioningSolidSlots = typeof __propDef.slots;
export default class CaptioningSolid extends SvelteComponentTyped<CaptioningSolidProps, CaptioningSolidEvents, CaptioningSolidSlots> {
}
export {};
