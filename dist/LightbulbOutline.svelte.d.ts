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
export type LightbulbOutlineProps = typeof __propDef.props;
export type LightbulbOutlineEvents = typeof __propDef.events;
export type LightbulbOutlineSlots = typeof __propDef.slots;
export default class LightbulbOutline extends SvelteComponentTyped<LightbulbOutlineProps, LightbulbOutlineEvents, LightbulbOutlineSlots> {
}
export {};
