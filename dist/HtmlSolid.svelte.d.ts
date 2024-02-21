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
export type HtmlSolidProps = typeof __propDef.props;
export type HtmlSolidEvents = typeof __propDef.events;
export type HtmlSolidSlots = typeof __propDef.slots;
export default class HtmlSolid extends SvelteComponentTyped<HtmlSolidProps, HtmlSolidEvents, HtmlSolidSlots> {
}
export {};
